// ==UserScript==
// @name         viola funny
// @version : 
// @description  :
// @author       kya
// @match        https://*.evades.io/*
// @match        https://*.evades.online/*
// @run-at       document-end
// ==/UserScript==


// cfg
const toggle = "Equal"; // clone camera
const redrawClone = "Minus"; // clone redraw

// keycode ref to change ↓

// https://gist.githubusercontent.com/umdill/0d8f9840167b9845b5dc5a621e89de60/raw/d1bdc29196447f682b0c0b99aa783dc1339f3310/gistfile1.txt

((_0x11a, _0x22b) => {
    "use strict";

    const _0x9f = [ // TEXT, DO NOT CHANGE, ONLY IF GAME UPDATES IRREGULARLY :)
        "\x59\x6f\x75\x20\x61\x72\x65\x20\x6e\x6f\x77\x20\x73\x70\x65\x63\x74\x61\x74\x69\x6e\x67",
        "\x52\x75\x6e\x20\x27\x2f\x73\x70\x65\x63\x74\x61\x74\x65\x20\x73\x74\x6f\x70\x27",
        "\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x77\x20\x66\x69\x6e\x64\x20\x61\x20\x70\x6c\x61\x79\x65\x72",
        "\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x66\x69\x6e\x64\x20\x61\x20\x70\x6c\x61\x79\x65\x72\x20\x6e\x61\x6d\x65\x64",
        "\x59\x6f\x75\x20\x61\x72\x65\x20\x6e\x6f\x20\x6c\x6f\x6e\x67\x65\x72\x20\x73\x70\x65\x63\x74\x61\x74\x69\x6e\x67",
        "\x53\x74\x6f\x70\x70\x65\x64\x20\x73\x70\x65\x63\x74\x61\x74\x69\x6e\x67",
        "\x59\x6f\x75\x20\x73\x74\x6f\x70\x70\x65\x64\x20\x73\x70\x65\x63\x74\x61\x74\x69\x6e\x67"
    ];

    const _0x51 = 123; //clone id (for cam pls ignore & dont change)
    const _0xbd = 1250; //redraw speed (cant be below 1000ms or redraw fails)
    const _0xce = 100; //redraw hud display (dont change)

    let _0x33 = null, _0x44 = null, _0x55 = null, _0x66 = false, _0x77 = null;
    let _0x88 = null, _0xaa = false, _0xbb = null, _0xcc = null;
    const _0xdd = new WeakSet();

    const _0xef = _0x0 => _0x0 !== null && (typeof _0x0 === "\x6f\x62\x6a\x65\x63\x74" || typeof _0x0 === "\x66\x75\x6e\x63\x74\x69\x6f\x6e");

    function _0xfe(_0x1) {
        if (!_0x1) return null;
        return Object.keys(_0x1).find(_0x2 =>
            _0x2.startsWith("\x5f\x5f\x72\x65\x61\x63\x74\x46\x69\x62\x65\x72\x24") ||
            _0x2.startsWith("\x5f\x5f\x72\x65\x61\x63\x74\x49\x6e\x74\x65\x72\x6e\x61\x6c\x49\x6e\x73\x74\x61\x6e\x63\x65\x24") ||
            _0x2.startsWith("\x5f\x5f\x72\x65\x61\x63\x74\x50\x72\x6f\x70\x73\x24")
        ) || null;
    }

    function _0x10(_0x3) { //evades.gameState (DONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGEDONOTCHANGE)
        if (!_0xef(_0x3)) return false;
        const _0x4 = _0x3.entities;
        return _0x4 && (_0x4 instanceof Map || Array.isArray(_0x4) || typeof _0x4 === "\x6f\x62\x6a\x65\x63\x74") &&
            (_0x3.self || _0x3.players || _0x3.chatMessages || _0x3.currentArea || _0x3.area);
    }

    function _0x20(_0x5) {
        const _0x6 = new WeakSet();
        const _0x7 = [{ value: _0x5, depth: 0 }];
        while (_0x7.length) {
            const { value: _0x8, depth: _0x9 } = _0x7.shift();
            if (!_0xef(_0x8) || _0x6.has(_0x8) || _0x9 > 18) continue;
            _0x6.add(_0x8);
            try {
                if (_0x10(_0x8)) return _0x8;
                if (_0x10(_0x8.gameState)) return _0x8.gameState;
                if (_0x10(_0x8.props?.gameState)) return _0x8.props.gameState;
                if (_0x10(_0x8.memoizedProps?.gameState)) return _0x8.memoizedProps.gameState;
            } catch {}
            let _0x10a;
            try { _0x10a = Object.keys(_0x8); } catch { continue; }
            for (const _0x11b of _0x10a) {
                if (["\x77\x69\x6e\x64\x6f\x77", "\x64\x6f\x63\x75\x6d\x65\x6e\x74", "\x6f\x77\x6e\x65\x72\x44\x6f\x63\x75\x6d\x65\x6e\x74", "\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65", "\x70\x61\x72\x65\x6e\x74\x45\x6c\x65\x6d\x65\x6e\x74"].includes(_0x11b)) continue;//evades.gameState
                let _0x12c;
                try { _0x12c = _0x8[_0x11b]; } catch { continue; }
                if (_0xef(_0x12c)) _0x7.push({ value: _0x12c, depth: _0x9 + 1 });
            }
        }
        return null;
    }

    function _0x30(_0x13) {
        if (!_0xef(_0x13)) return false;
        try {
            return typeof _0x13.centerOn === "\x66\x75\x6e\x63\x74\x69\x6f\x6e" && ("\x63\x65\x6e\x74\x65\x72\x58" in _0x13 || "\x63\x65\x6e\x74\x65\x72\x59" in _0x13 || "\x7a\x6f\x6f\x6d" in _0x13);
        } catch { return false; }
    }

    function _0x40(_0x14) {
        const _0x15 = new WeakSet();
        const _0x16 = [{ value: _0x14, depth: 0 }];
        while (_0x16.length) {
            const { value: _0x17, depth: _0x18 } = _0x16.shift();
            if (!_0xef(_0x17) || _0x15.has(_0x17) || _0x18 > 18) continue;
            _0x15.add(_0x17);
            try {
                if (_0x30(_0x17.camera)) return _0x17.camera;
                if (_0x30(_0x17.renderer?.camera)) return _0x17.renderer.camera;
                if (_0x30(_0x17)) return _0x17;
            } catch {}
            let _0x19;
            try { _0x19 = Object.keys(_0x17); } catch { continue; }
            for (const _0x1a of _0x19) {
                if (["\x77\x69\x6e\x64\x6f\x77", "\x64\x6f\x63\x75\x6d\x65\x6e\x74", "\x6f\x77\x6e\x65\x72\x44\x6f\x63\x75\x6d\x65\x6e\x74", "\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65", "\x70\x61\x72\x65\x6e\x74\x45\x6c\x65\x6d\x65\x6e\x74"].includes(_0x1a)) continue;
                let _0x1b;
                try { _0x1b = _0x17[_0x1a]; } catch { continue; }
                if (_0xef(_0x1b)) _0x16.push({ value: _0x1b, depth: _0x18 + 1 });
            }
        }
        return null;
    }

    function _0x50() {
        const _0x1c = [
            "\x2e\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64\x2d\x6c\x69\x6e\x65",
            "\x2e\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64",
            "\x23\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64",
            "\x23\x63\x61\x6e\x76\x61\x73",
            "\x63\x61\x6e\x76\x61\x73",
            "\x23\x67\x61\x6d\x65",
            "\x23\x72\x6f\x6f\x74"
        ];
        const _0x1d = [];
        for (const _0x1e of _0x1c) {
            for (const _0x1f of document.querySelectorAll(_0x1e)) {
                if (!_0x1d.includes(_0x1f)) _0x1d.push(_0x1f);
            }
        }
        return _0x1d;
    }

    function _0x60(_0x20c) {
        const _0x21 = _0xfe(_0x20c);
        if (!_0x21) return;
        let _0x22;
        try { _0x22 = _0x20c[_0x21]; } catch { return; }
        const _0x23 = new Set();
        while (_0x22 && !_0x23.has(_0x22)) {
            _0x23.add(_0x22);
            const _0x24 = [_0x22, _0x22.stateNode, _0x22.memoizedProps, _0x22.pendingProps, _0x22.memoizedState];
            for (const _0x25 of _0x24) {
                if (!_0x33) _0x33 = _0x20(_0x25);
                if (!_0x44) _0x44 = _0x40(_0x25);
                if (_0x33 && _0x44) return;
            }
            _0x22 = _0x22.return;
        }
    }

    function _0x70() {
        if (window.evadesGameState) _0x33 = window.evadesGameState;
        for (const _0x26 of _0x50()) {
            _0x60(_0x26);
            if (_0x33 && _0x44) break;
        }
        if (_0x33) window.evadesGameState = _0x33;
        if (_0x44) window.evadesCamera = _0x44;
        return Boolean(_0x33 && _0x44);
    }

    function _0x80(_0x27) {
        if (!_0x27) return [];
        if (_0x27 instanceof Map) return [..._0x27.entries()];
        if (Array.isArray(_0x27)) return _0x27.map((_0x28, _0x29) => [String(_0x29), _0x28]);
        if (typeof _0x27 === "\x6f\x62\x6a\x65\x63\x74") return Object.entries(_0x27);
        return [];
    }

    function _0x90(_0x2a) {
        return _0x2a && Number(_0x2a.entityType) === _0x51 && Number.isFinite(_0x2a.x) && Number.isFinite(_0x2a.y) &&
            !_0x2a.removed && !_0x2a.destroyed && !_0x2a.isDestroyed && !_0x2a.dead;
    }

    function _0xa0() {
        if (!_0x33) return [];
        const _0xcols = [_0x33.entities, _0x33.area?.entities, _0x33.currentArea?.entities, _0x33.self?.entities];
        const _0x2c = [], _0x2d = new Set();
        for (const _0x2e of _0xcols) {
            for (const [_0x2f, _0x30a] of _0x80(_0x2e)) {
                if (_0x90(_0x30a) && !_0x2d.has(_0x30a)) {
                    _0x2d.add(_0x30a);
                    _0x2c.push([_0x2f, _0x30a]);
                }
            }
        }
        return _0x2c;
    }

    function _0xb0() {
        const _0x31 = _0xa0();
        if (!_0x31.length) { _0x77 = null; return null; }
        if (_0x77 !== null) {
            const _0x32 = _0x31.find(([_0x33a]) => String(_0x33a) === String(_0x77));
            if (_0x32) return _0x32[1];
        }
        _0x31.sort(([_0x34], [_0x35]) => Number(_0x35) - Number(_0x34));
        _0x77 = _0x31[0][0];
        return _0x31[0][1];
    }

    function _0xc0() {
        if (!_0x44 || _0xdd.has(_0x44) || typeof _0x44.centerOn !== "\x66\x75\x6e\x63\x74\x69\x6f\x6e") return false;
        _0x55 = _0x44.centerOn;
        _0x44.centerOn = function (_0x36) {
            if (_0x66) {
                const _0x37 = _0xb0();
                if (_0x37) return _0x55.call(this, _0x37);
            }
            return _0x55.call(this, _0x36);
        };
        _0xdd.add(_0x44);
        return true;
    }

    function _0xd0() {
        if (_0x33 && _0x44 && _0xdd.has(_0x44)) return true;
        const _0x38 = _0x44;
        _0x70();
        if (_0x44 && _0x44 !== _0x38) _0x55 = null;
        return _0xc0();
    }

    function _0x1e0(_0x39) {
        return _0x39 instanceof HTMLInputElement || _0x39 instanceof HTMLTextAreaElement ||
            _0x39 instanceof HTMLSelectElement || _0x39?.isContentEditable;
    }

    function _0xf0() {
        if (!_0xd0()) return;
        if (!_0x66 && !_0xb0()) return;
        _0x66 = !_0x66;
        if (!_0x66) _0x77 = null;
    }

    function _0x100(input, value) {
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "\x76\x61\x6c\x75\x65")?.set;
        if (setter) setter.call(input, value);
        else input.value = value;
        input.dispatchEvent(new InputEvent("\x69\x6e\x70\x75\x74", { bubbles: true, inputType: "\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", data: value }));
        input.dispatchEvent(new Event("\x63\x68\x61\x6e\x67\x65", { bubbles: true }));
    }

    function _0x110(command) {
        const input = document.querySelector("\x23\x63\x68\x61\x74\x2d\x69\x6e\x70\x75\x74");
        if (!input) return false;
        const prevOpacity = input.style.opacity;
        input.style.opacity = "\x30";
        input.focus();
        _0x100(input, command);
        const options = { key: "\x45\x6e\x74\x65\x72", code: "\x45\x6e\x74\x65\x72", keyCode: 13, which: 13, charCode: 13, bubbles: true, cancelable: true };
        input.dispatchEvent(new KeyboardEvent("\x6b\x65\x79\x64\x6f\x77\x6e", options));
        input.dispatchEvent(new KeyboardEvent("\x6b\x65\x79\x70\x72\x65\x73\x73", options));
        input.dispatchEvent(new KeyboardEvent("\x6b\x65\x79\x75\x70", options));
        _0x100(input, "");
        input.blur();
        input.style.opacity = prevOpacity;
        return true;
    }

    function _0x120(nameElement) {
        const parts = [];
        for (const node of nameElement.childNodes) {
            if (node.nodeType === Node.ELEMENT_NODE && node.classList?.contains("\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64\x2d\x68\x65\x72\x6f")) continue;
            parts.push(node.textContent || "");
        }
        return parts.join("").trim();
    }

    function _0x130() {
        const lines = document.querySelectorAll("\x23\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64\x20\x2e\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64\x2d\x6c\x69\x6e\x65");
        const players = [];
        const seen = new Set();
        for (const line of lines) {
            const nameElement = line.querySelector("\x2e\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64\x2d\x6e\x61\x6d\x65");
            if (!nameElement || nameElement.querySelector("\x62")) continue;
            const playerName = _0x120(nameElement);
            if (!playerName || seen.has(playerName)) continue;
            seen.add(playerName);
            players.push(playerName);
        }
        return players;
    }

    function _0x140(message) {
        const chatWindow = document.querySelector("\x23\x63\x68\x61\x74\x2d\x77\x69\x6e\x64\x6f\x77");
        if (!chatWindow) return;
        const messageElement = document.createElement("\x64\x69\x76");
        messageElement.className = "\x63\x68\x61\x74\x2d\x6d\x65\x73\x73\x61\x67\x65";
        const warningElement = document.createElement("\x73\x70\x61\x6e");
        warningElement.className = "\x73\x65\x72\x76\x65\x72\x2d\x77\x61\x72\x6e\x69\x6e\x67";
        const contentElement = document.createElement("\x73\x70\x61\x6e");
        contentElement.textContent = message;
        warningElement.appendChild(contentElement);
        messageElement.appendChild(warningElement);
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function _0x150(messageElement) {
        const text = messageElement.textContent || "";
        if (text.includes(_0x9f[3]) || text.includes("\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x66\x69\x6e\x64\x20\x61\x20\x70\x6c\x61\x79\x65\x72\x20\x6e\x61\x6d\x65\x64")) {
            _0x140("\x5b\x53\x43\x52\x49\x50\x54\x5d\x3a\x20\x52\x65\x74\x72\x79\x20\x72\x65\x64\x72\x61\x77");
            return true;
        }
        return _0x9f.some(msg => text.includes(msg));
    }

    function _0x160(root = document) {
        const messages = [];
        if (root instanceof Element && root.matches("\x2e\x63\x68\x61\x74\x2d\x6d\x65\x73\x73\x61\x67\x65")) messages.push(root);
        if (root.querySelectorAll) messages.push(...root.querySelectorAll("\x2e\x63\x68\x61\x74\x2d\x6d\x65\x73\x73\x61\x67\x65"));
        for (const message of messages) {
            if (_0x150(message)) message.remove();
        }
    }

    function _0x170() {
        if (_0x88) return;
        _0x160();
        _0x88 = new MutationObserver(records => {
            for (const record of records) {
                for (const node of record.addedNodes) {
                    if (node instanceof Element) _0x160(node);
                }
            }
        });
        _0x88.observe(document.documentElement, { childList: true, subtree: true });
    }

    function _0x180(duration = _0xbd) {
        document.querySelector("\x23\x76\x69\x6f\x6c\x61\x2d\x72\x65\x64\x72\x61\x77\x69\x6e\x67\x2d\x6f\x76\x65\x72\x6c\x61\x79")?.remove();
        if (_0xcc) { clearInterval(_0xcc); _0xcc = null; }

        for (const canvas of document.querySelectorAll("\x63\x61\x6e\x76\x61\x73")) {
            if (!canvas.hasAttribute("\x64\x61\x74\x61\x2d\x76\x69\x6f\x6c\x61\x2d\x68\x69\x64\x64\x65\x6e")) {
                canvas.dataset.violaPreviousVisibility = canvas.style.visibility || "";
                canvas.dataset.violaPreviousOpacity = canvas.style.opacity || "";
                canvas.dataset.violaPreviousPointerEvents = canvas.style.pointerEvents || "";
                canvas.dataset.violaHidden = "\x74\x72\x75\x65";
            }
            canvas.style.visibility = "\x68\x69\x64\x64\x65\x6e";
            canvas.style.opacity = "\x30";
            canvas.style.pointerEvents = "\x6e\x6f\x6e\x65";
        }

        const overlay = document.createElement("\x64\x69\x76");
        overlay.id = "\x76\x69\x6f\x6c\x61\x2d\x72\x65\x64\x72\x61\x77\x69\x6e\x67\x2d\x6f\x76\x65\x72\x6c\x61\x79";
        Object.assign(overlay.style, {
            position: "\x66\x69\x78\x65\x64", inset: "\x30", width: "\x31\x30\x30\x76\x77", height: "\x31\x30\x30\x76\x68", zIndex: "\x32\x31\x34\x37\x34\x38\x33\x36\x34\x37",
            background: "\x23\x30\x30\x30", display: "\x66\x6c\x65\x78", flexDirection: "\x63\x6f\x6c\x75\x6d\x6e", alignItems: "\x63\x65\x6e\x74\x65\x72",
            justifyContent: "\x63\x65\x6e\x74\x65\x72", pointerEvents: "\x61\x6c\x6c", userSelect: "\x6e\x6f\x6e\x65", color: "\x23\x66\x66\x66",
            fontFamily: "\x41\x72\x69\x61\x6c\x2c\x20\x48\x65\x6c\x76\x65\x74\x69\x63\x61\x2c\x20\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66"
        });

        const title = document.createElement("\x64\x69\x76");
        title.textContent = "\x52\x65\x64\x72\x61\x77\x69\x6e\x67\x20\x63\x6c\x6f\x6e\x65";
        Object.assign(title.style, { fontSize: "\x33\x34\x70\x78", fontWeight: "\x37\x30\x30", letterSpacing: "\x30\x2e\x35\x70\x78", textAlign: "\x63\x65\x6e\x74\x65\x72", marginBottom: "\x31\x34\x70\x78" });

        _0xbb = document.createElement("\x64\x69\x76");
        _0xbb.textContent = (duration / 1000).toFixed(2);
        Object.assign(_0xbb.style, { fontSize: "\x32\x34\x70\x78", fontWeight: "\x34\x30\x30", fontVariantNumeric: "\x74\x61\x62\x75\x6c\x61\x72\x2d\x6e\x75\x6d\x73", opacity: "\x30\x2e\x38\x35", minWidth: "\x38\x30\x70\x78", textAlign: "\x63\x65\x6e\x74\x65\x72" });

        overlay.appendChild(title);
        overlay.appendChild(_0xbb);
        document.documentElement.appendChild(overlay);
    }

    function _0x190(duration = _0xbd) {
        if (_0xcc) clearInterval(_0xcc);
        const startTime = performance.now();
        const update = () => {
            const remaining = Math.max(0, duration - (performance.now() - startTime));
            if (_0xbb) _0xbb.textContent = (remaining / 1000).toFixed(2);
            if (remaining <= 0) {
                clearInterval(_0xcc);
                _0xcc = null;
                if (_0xbb) _0xbb.textContent = "\x30\x2e\x30\x30";
            }
        };
        update();
        _0xcc = setInterval(update, 10);
    }

    function _0x1a0() {
        if (_0xcc) { clearInterval(_0xcc); _0xcc = null; }
        _0xbb = null;
        document.querySelector("\x23\x76\x69\x6f\x6c\x61\x2d\x72\x65\x64\x72\x61\x77\x69\x6e\x67\x2d\x6f\x76\x65\x72\x6c\x61\x79")?.remove();
        for (const canvas of document.querySelectorAll("\x63\x61\x6e\x76\x61\x73")) {
            if (!canvas.hasAttribute("\x64\x61\x74\x61\x2d\x76\x69\x6f\x6c\x61\x2d\x68\x69\x64\x64\x65\x6e")) continue;
            canvas.style.visibility = canvas.dataset.violaPreviousVisibility || "";
            canvas.style.opacity = canvas.dataset.violaPreviousOpacity || "";
            canvas.style.pointerEvents = canvas.dataset.violaPreviousPointerEvents || "";
            delete canvas.dataset.violaPreviousVisibility;
            delete canvas.dataset.violaPreviousOpacity;
            delete canvas.dataset.violaPreviousPointerEvents;
            delete canvas.dataset.violaHidden;
        }
    }

    function _0x1b0() {
        if (_0xaa) return;
        const players = _0x130();
        if (!players.length) {
            _0x140("\x5b\x53\x43\x52\x49\x50\x54\x5d\x20\x41\x6e\x6f\x74\x68\x65\x72\x20\x70\x6c\x61\x79\x65\x72\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x69\x6e\x67\x61\x6d\x65");
            return;
        }
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        _0xaa = true;
        _0x180(_0xbd);
        _0x190(_0xbd);

        const sent = _0x110(`\x2f\x73\x70\x65\x63\x74\x61\x74\x65\x20${randomPlayer}`);
        if (!sent) {
            _0x1a0();
            _0xaa = false;
            return;
        }

        setTimeout(() => {
            _0x110("\x2f\x73\x70\x65\x63\x74\x61\x74\x65\x20\x73\x74\x6f\x70");
            _0x160();
            setTimeout(() => {
                _0x1a0();
                _0x160();
                _0xaa = false;
            }, _0xce);
        }, _0xbd);
    }

    function _0x1c0(_0x3a) {
        if (_0x3a.repeat || _0x1e0(_0x3a.target)) return;
        const isCameraToggle = _0x3a.code === _0x11a || _0x3a.key === "=" || _0x3a.key === "+";
        const isRedrawToggle = _0x3a.code === _0x22b || _0x3a.key === "-";
        if (!isCameraToggle && !isRedrawToggle) return;

        _0x3a.preventDefault();
        _0x3a.stopImmediatePropagation();

        if (isRedrawToggle) {
            _0x1b0();
            return;
        }
        _0xf0();
    }

    function _0x1d0() {
        _0x170();
        const int = setInterval(() => {
            const canvas = document.querySelector("\x63\x61\x6e\x76\x61\x73");
            if (canvas && _0xd0()) {
                clearInterval(int);
                document.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x1c0, true);
            }
        }, 1);
    }

    if (document.readyState === "\x63\x6f\x6d\x70\x6c\x65\x74\x65") _0x1d0();
    else window.addEventListener("\x6c\x6f\x61\x64", _0x1d0);
})(toggle, redrawClone);
