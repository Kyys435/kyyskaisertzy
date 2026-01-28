(function () {
  'use strict';

  const DEBUG = true;

  const log = (...a) => DEBUG && console.log('%c[SAFE]', 'color:#22c55e', ...a);
  const fix = (...a) => DEBUG && console.warn('%c[SAFE FIX]', 'color:#0ea5e9', ...a);
  const err = (...a) => DEBUG && console.error('%c[SAFE ERROR]', 'color:#ef4444', ...a);

  const _qs = Document.prototype.querySelector;
  Document.prototype.querySelector = function (sel) {
    try {
      return _qs.call(this, sel);
    } catch (e) {
      fix('querySelector typo/fail →', sel);
      return null;
    }
  };

  const _gid = Document.prototype.getElementById;
  Document.prototype.getElementById = function (id) {
    try {
      return _gid.call(this, id);
    } catch (e) {
      fix('getElementById typo/fail →', id);
      return null;
    }
  };

  const _add = DOMTokenList.prototype.add;
  DOMTokenList.prototype.add = function (...cls) {
    try {
      return _add.apply(this, cls);
    } catch (e) {
      fix('classList.add protected', cls);
    }
  };

  const _remove = DOMTokenList.prototype.remove;
  DOMTokenList.prototype.remove = function (...cls) {
    try {
      return _remove.apply(this, cls);
    } catch (e) {
      fix('classList.remove protected', cls);
    }
  };
  const _on = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (t, fn, opt) {
    if (!this) {
      fix('addEventListener on null → skipped', t);
      return;
    }
    try {
      return _on.call(this, t, fn, opt);
    } catch (e) {
      fix('addEventListener error protected', t);
    }
  };

  if (window.fetch) {
    const _fetch = window.fetch;
    window.fetch = (...args) =>
      _fetch(...args).catch(e => {
        fix('fetch failed but protected', args[0]);
        throw e;
      });
  }

  window.addEventListener('error', e => {
    err('Runtime error caught', {
      msg: e.message,
      file: e.filename,
      line: e.lineno,
      col: e.colno
    });
  });

  window.addEventListener('unhandledrejection', e => {
    err('Promise rejection caught', e.reason);
  });

  log('safe.js active — protection enabled');
})();