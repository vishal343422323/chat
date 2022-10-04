'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2780],
  {
    3293: function (e, t, o) {
      o.d(t, {
        k: function () {
          return i;
        },
      });
      var n = o(2087),
        r = o(9998);
      const i = {
        error: function (e) {
          for (
            var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            o[i - 1] = arguments[i];
          r.vc.sentry &&
            n.uT(e, {
              level: 'error',
              contexts: { details: { asString: JSON.stringify(o) } },
            });
        },
        trackSentryEvent: function (e) {
          if (r.vc.sentry) {
            for (
              var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              o[i - 1] = arguments[i];
            n.uT(e, { extra: { details: o } });
          }
        },
      };
    },
    2780: function (e, t, o) {
      o.d(t, {
        P: function () {
          return se;
        },
      });
      var n = o(2983),
        r = o(1607),
        i = o.n(r),
        a = o(5643),
        s = o(4927);
      const l = (e) => e.startsWith('agent:');
      var c = o(3293),
        d = o(55),
        p = o(6367),
        u = o(7004),
        g = o(6652),
        h = o(4558),
        m = o(7458);
      const x = d.ZP.div.withConfig({ componentId: 'sc-1ynbukr-0' })([
        'position:relative;z-index:1;box-shadow:0 3px 1px rgba(41,47,53,0.07),0 1px 0 rgba(41,47,53,0.2);display:flex;grid-gap:10px;background-color:var(--global-chat-header-background);padding:16px;@media screen and (min-width:568px){border-top-left-radius:var(--metrics-chat-radius);border-top-right-radius:var(--metrics-chat-radius);}@media screen and (max-width:1025px){display:grid;&[data-is-input-focus=true]{border-radius:0;}}',
      ]),
        b = (0, d.ZP)(p.Z).withConfig({ componentId: 'sc-1ynbukr-1' })([
          '@media screen and (min-width:568px){text-align:center;}',
        ]),
        f = d.ZP.div.withConfig({ componentId: 'sc-1ynbukr-2' })([
          'display:flex;width:100%;flex-direction:column;align-items:center;grid-gap:16px;',
        ]),
        v = d.ZP.div.withConfig({ componentId: 'sc-1ynbukr-3' })([
          'display:flex;justify-content:center;align-items:center;width:100%;grid-gap:16px;padding:0 16px;',
        ]),
        y = d.ZP.div.withConfig({ componentId: 'sc-1ynbukr-4' })([
          '@media screen and (max-width:1025px){display:flex;grid-gap:10px;background:var(--global-background-accent);}display:none;',
        ]),
        w = (e) => {
          let { isInputFocus: t } = e;
          return (0, m.jsxs)(x, {
            'data-is-input-focus': t,
            children: [
              t &&
              (0, m.jsxs)(y, {
                children: [
                  (0, m.jsx)(h.J, {
                    name: 'Arrow',
                    direction: 'left',
                    color: 'secondary',
                    size: 14,
                  }),
                  (0, m.jsx)(p.Z, {
                    fontSize: '14px',
                    color: 'heading',
                    children: 'BACK',
                  }),
                ],
              }),
              (0, m.jsxs)(f, {
                children: [
                  (0, m.jsx)(b, {
                    variant: 'H4',
                    color: 'heading',
                    fontSize: '22px',
                    children: "Get answers until you're satisfied",
                  }),
                  (0, m.jsxs)(v, {
                    children: [
                      (0, m.jsx),
                      (0, m.jsx)(p.Z, {
                        variant: 'Text2',
                        fontSize: '16px',
                        fontWeight: 300,
                        color: 'heading',
                        children: '100+ verified experts are online now.',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var k = o(6891),
        I = o(4792),
        j = o(6100),
        C = o(2446),
        $ = o(754),
        Z = o(8872);
      const P = d.ZP.div.withConfig({ componentId: 'sc-1yprbv9-0' })(
        [
          'word-break:break-word;padding:12px;border-radius:var(--metrics-chat-radius_message_customer);background-color:var(--global-chat-message-customer-background);max-width:90%;p{color:var(--global-chat-message-customer-color);}',
          ';',
          ';',
        ],
        (e) => {
          let { isAgent: t } = e;
          return (
            t &&
            (0, d.iv)(
              [
                'border-radius:var(--metrics-chat-radius_message_expert);background-color:var(--global-chat-message-expert-background);max-width:90%;p{color:var(--global-chat-message-expert-color);}',
                ';',
              ],
              (e) => {
                let { withAvatar: t } = e;
                return !t && (0, d.iv)(['margin-left:46px;']);
              }
            )
          );
        },
        (e) => {
          let { isAgent: t, withAvatar: o } = e;
          return !t && !o && (0, d.iv)(['margin-right:46px;']);
        }
      ),
        T = d.ZP.div.withConfig({ componentId: 'sc-1yprbv9-1' })([
          'height:100%;padding:0 20px;margin-top:5px;',
        ]),
        z = d.ZP.a.withConfig({ componentId: 'sc-1yprbv9-2' })([
          'font-size:1rem;color:#0648DC;&:hover{color:#0038B9;text-decoration:underline;}&:visited{color:#8400B9;text-decoration:underline;}',
        ]),
        S = (0, n.memo)((e) => {
          var t;
          let { message: o, isAgent: r = !1, withAvatar: i, isIframe: a } = e;
          const s = (0, n.useCallback)((e) => {
            e.preventDefault(),
              window &&
              window.parent.postMessage(
                { event: 'fromChatbot', url: 'https://www.google.com/' },
                '*'
              );
          }, []);
          return (0, m.jsx)(P, {
            isAgent: r,
            withAvatar: i,
            children:
              '...' === o.msg
                ? (0, m.jsx)(T, { children: (0, m.jsx)(C.b, {}) })
                : (0, m.jsxs)('div', {
                  children: [
                    (0, m.jsx)($.z, {
                      children: (0, m.jsx)(p.Z, {
                        variant: 'Text2',
                        color: r ? 'headingInverted' : 'heading',
                        children: o.msg,
                      }),
                    }),
                    (null === (t = o.options) || void 0 === t
                      ? void 0
                      : t.includes('paymentLink')) &&
                    (0, m.jsxs)(m.Fragment, {
                      children: [
                        '\xa0',
                        a
                          ? (0, m.jsx)(z, {
                            href: Z.T.Payment,
                            onClick: s,
                            children: 'Continue >>',
                          })
                          : (0, m.jsx)(z, {
                            href: Z.T.Payment,
                            children: 'Continue >>',
                          }),
                      ],
                    }),
                  ],
                }),
          });
        }),
        _ = {
          author: 'agent',
          messages: [
            {
              msg: '...',
              display_name: 'Customer Support',
              nick: 'agent',
              timestamp: Date.now(),
            },
          ],
        },
        A = d.ZP.div.withConfig({ componentId: 'sc-11zcfbk-0' })([
          'display:flex;max-width:90%;gap:15px;align-items:center;',
        ]),
        F = (0, n.memo)((e) => {
          const t = 'messageGroup' in e ? e.messageGroup : _,
            { name: o, photo: n } = (0, a.oR)(I.fJ);
          return (0, m.jsx)(m.Fragment, {
            children: t.messages.map((r, i) =>
              i === t.messages.length - 1
                ? (0, m.jsxs)(
                  A,
                  {
                    children: [
                      (0, m.jsx)(j.q, { name: o, src: n }),
                      (0, m.jsx)(S, {
                        isAgent: !0,
                        message: r,
                        withAvatar: i === t.messages.length - 1,
                        isIframe:
                          null === e || void 0 === e ? void 0 : e.isIframe,
                      }),
                    ],
                  },
                  r.timestamp
                )
                : (0, m.jsx)(
                  S,
                  {
                    isAgent: !0,
                    message: r,
                    withAvatar: i === t.messages.length - 1,
                    isIframe:
                      null === e || void 0 === e ? void 0 : e.isIframe,
                  },
                  r.timestamp
                )
            ),
          });
        }),
        H = d.ZP.div.withConfig({ componentId: 'sc-aqyx01-0' })([
          'display:flex;flex-direction:column;align-items:flex-end;grid-gap:5px;',
        ]),
        E = d.ZP.div.withConfig({ componentId: 'sc-aqyx01-1' })([
          'display:flex;grid-gap:10px;',
        ]),
        D = d.ZP.div.withConfig({ componentId: 'sc-aqyx01-2' })([
          'display:none;@media screen and (min-width:568px){display:block;}',
        ]),
        q = (0, n.memo)((e) => {
          let { messageGroup: t } = e;
          return (0, m.jsx)(H, {
            children: t.messages.map((e, o) =>
              o === t.messages.length - 1
                ? (0, m.jsxs)(
                  E,
                  {
                    children: [
                      (0, m.jsx)(S, {
                        message: e,
                        withAvatar: o === t.messages.length - 1,
                      }),
                      (0, m.jsx)(D, {
                        children: (0, m.jsx)(j.q, { isCustomer: !0 }),
                      }),
                    ],
                  },
                  e.timestamp
                )
                : (0, m.jsx)(
                  S,
                  { message: e, withAvatar: o === t.messages.length - 1 },
                  e.timestamp
                )
            ),
          });
        }),
        K = d.ZP.div.withConfig({ componentId: 'sc-1qkbe07-0' })([
          'padding:10px 20px;height:100%;overflow-x:hidden;background-color:var(--global-chat-background);scrollbar-color:var(--global-scroll-background) var(--global-chat-background) !important;&::-webkit-scrollbar-track{background:var(--global-chat-background);}',
        ]),
        M = d.ZP.div.withConfig({ componentId: 'sc-1qkbe07-1' })([
          'display:flex;flex-direction:column;justify-content:flex-end;flex-grow:0;gap:10px;word-wrap:break-word;@media screen and (min-width:1025px){justify-content:flex-start;}',
        ]),
        R = d.ZP.div.withConfig({ componentId: 'sc-1qkbe07-2' })([
          'display:none;@media screen and (min-width:1025px){display:flex;grid-gap:10px;}',
        ]),
        B = (e) => {
          let { messages: t, agentIsTyping: o, isIframe: r } = e;
          const i = (0, k.o)(t.length),
            s = (0, n.useRef)(null);
          (0, n.useEffect)(() => {
            var e, n;
            (t.length > (null !== i && void 0 !== i ? i : 0) || o) &&
              (null === (e = s.current) ||
                void 0 === e ||
                e.scrollTo(
                  0,
                  null === (n = s.current) || void 0 === n
                    ? void 0
                    : n.scrollHeight
                ));
          }, [o, t.length, i]);
          const { name: l } = (0, a.oR)(I.fJ);
          return (0, m.jsx)(K, {
            ref: s,
            children: (0, m.jsxs)(M, {
              children: [
                (0, m.jsxs)(R, {
                  children: [
                    (0, m.jsx)(p.Z, {
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'bodyInverted',
                      children: l,
                    }),
                    (0, m.jsx)(p.Z, {
                      color: 'bodyInverted',
                      fontSize: '12px',
                      fontWeight: 300,
                      children: "Expert's Assistant",
                    }),
                  ],
                }),
                t.map((e) =>
                  ((e) => 'agent' === e.author)(e)
                    ? (0, m.jsx)(
                      F,
                      { messageGroup: e, isIframe: r },
                      `Group${e.messages[0].timestamp}`
                    )
                    : (0, m.jsx)(
                      q,
                      { messageGroup: e },
                      `Group${e.messages[0].timestamp}`
                    )
                ),
                o && (0, m.jsx)(F, { agentIsTyping: !0 }),
              ],
            }),
          });
        };
      var G = o(5263),
        W = o(7917),
        N = o(1413);
      const V = {
        up: (0, d.iv)([
          "transform:translate(-50%,-100%);left:50%;top:-5px;&:before{content:'';position:absolute;bottom:-4px;left:50%;transform:translate(-50%,0);border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--components-tooltip-background);}",
        ]),
        down: (0, d.iv)([
          "transform:translate(-50%,100%);left:50%;bottom:-5px;&:before{content:'';position:absolute;top:-4px;left:50%;transform:translate(-50%,0);border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid var(--components-tooltip-background);}",
        ]),
        left: (0, d.iv)([
          "transform:translate(-100%,-50%);top:50%;left:-5px;&:before{content:'';position:absolute;right:-4px;top:50%;transform:translate(0,-50%);border-top:5px solid transparent;border-left:5px solid var(--components-tooltip-background);border-bottom:5px solid transparent;}",
        ]),
        right: (0, d.iv)([
          "transform:translate(100%,-50%);top:50%;right:-5px;&:before{content:'';position:absolute;left:-4px;top:50%;transform:translate(0,-50%);border-top:5px solid transparent;border-right:5px solid var(--components-tooltip-background);border-bottom:5px solid transparent;}",
        ]),
      },
        J = d.ZP.div.withConfig({ componentId: 'sc-cdxsi6-0' })([
          'position:relative;display:grid;grid-gap:10px;width:100%;',
        ]),
        O = d.ZP.div.withConfig({ componentId: 'sc-cdxsi6-1' })(
          [
            'position:absolute;display:none;opacity:0;visibility:hidden;background:var(--components-tooltip-background);padding:4px 10px;border-radius:4px;z-index:100;',
            ';',
          ],
          (e) => {
            let { $isVisible: t } = e;
            return (
              t &&
              (0, d.iv)(
                ['display:block;opacity:1;visibility:visible;', ';'],
                (e) => {
                  let { $direction: t } = e;
                  return V[t];
                }
              )
            );
          }
        ),
        X = (0, d.ZP)(p.Z).withConfig({ componentId: 'sc-cdxsi6-2' })([
          'color:var(--components-tooltip-color);',
        ]),
        L = (e) => {
          let {
            label: t,
            isVisible: o = !1,
            direction: n = 'up',
            children: r,
          } = e;
          return (0, m.jsxs)(J, {
            children: [
              r,
              (0, m.jsx)(O, {
                $direction: n,
                $isVisible: o,
                children: (0, m.jsx)(X, {
                  variant: 'Text2',
                  fontSize: '14px',
                  wrap: 'nowrap',
                  children: t,
                }),
              }),
            ],
          });
        };
      var Q = o(8290),
        U = o(9998),
        Y = o(616);
      const ee = d.ZP.div.withConfig({ componentId: 'sc-hxd586-0' })([
        'display:grid;grid-auto-flow:column;align-items:flex-end;grid-template-columns:1fr auto;grid-gap:var(--metrics-chat-gap_input);box-shadow:0 4px 5px rgba(0,0,0,0.14),0 1px 10px rgba(0,0,0,0.12),0 2px 4px rgba(0,0,0,0.2);background-color:var(--global-chat-input-box);padding:var(--metrics-chat-padding_input_mobile);@media screen and (min-width:568px){padding:var(--metrics-chat-padding_input);border-bottom-left-radius:var(--metrics-chat-radius);border-bottom-right-radius:var(--metrics-chat-radius);}@media screen and (max-width:1025px){&[data-is-input-focus=true]{border-radius:0;}};',
      ]),
        te = (0, d.ZP)(W.I).withConfig({ componentId: 'sc-hxd586-1' })(
          [
            'width:100%;font-style:italic;border-radius:var(--metrics-chat-radius_input);border:2px solid transparent;background:var(--global-chat-input-background);',
            ';@keyframes blink{50%{border-color:var(--global-background-accent);}}',
          ],
          (e) => {
            let { isHighlightedInput: t } = e;
            return t && (0, d.iv)(['animation:blink 1s ease-in-out infinite;']);
          }
        ),
        oe = (0, d.ZP)(N.K).withConfig({ componentId: 'sc-hxd586-2' })(
          [
            'border-radius:var(--metrics-chat-radius_input);background:var(--global-chat-input-background);color:var(--global-chat-input-color);padding:8px 5px;outline:2px solid transparent;',
            ';@keyframes blink{50%{outline-color:var(--global-background-accent);}}::placeholder{color:var(--global-chat-input-placeholder);}::-webkit-scrollbar{display:block;}::-webkit-scrollbar-track{background:var(--global-background-secondary);}textarea{outline:none;}',
          ],
          (e) => {
            let { isHighlightedInput: t } = e;
            return t && (0, d.iv)(['animation:blink 1s ease-in-out infinite;']);
          }
        ),
        ne = (0, d.ZP)(Y.z).withConfig({ componentId: 'sc-hxd586-3' })([
          'border-radius:var(--metrics-chat-radius_button);padding:14px 16px;',
        ]),
        re = (e) => {
          let {
            buttonTitle: t,
            onSubmit: o,
            isTyping: r,
            inputRef: i,
            isHighlightedInput: a,
            setIsInputFocus: s,
            isInputFocus: l,
          } = e;
          const { 0: c, 1: d } = (0, n.useState)(''),
            { 0: p, 1: u } = (0, n.useState)('auto'),
            g = (0, G.N)(r, 500);
          (0, n.useEffect)(() => {
            if (i && i.current) {
              i.current.style.height = 'auto';
              const e = i.current.scrollHeight;
              i.current.style.height = e + 'px';
            }
          }, [i, c]);
          const h = (0, n.useCallback)(
            (e) => {
              var t;
              e.stopPropagation(),
                e.preventDefault(),
                null === i ||
                void 0 === i ||
                null === (t = i.current) ||
                void 0 === t ||
                t.focus(),
                c && (o(c), d(''), u('auto'));
            },
            [i, c, o]
          ),
            x = (0, n.useCallback)(
              (e) => {
                'Enter' === e.key ? (h(e), u('auto')) : (r(!0), g(!1));
              },
              [g, r, h]
            ),
            { isDesktop: b } = (0, Q.G)(),
            f = b ? 'up' : 'down',
            v = () => {
              s(!1), b && (document.body.style.overflow = 'auto');
            },
            y = () => {
              s(!0),
                b &&
                (window && window.scrollTo(0, 0),
                  (document.body.style.overflow = 'hidden'));
            };
          return (0, m.jsxs)(ee, {
            'data-is-input-focus': l,
            children: [
              (0, m.jsx)(L, {
                label: 'Ask your question here',
                isVisible: a,
                direction: f,
                children: U.vc.chatBotInputMultiline
                  ? (0, m.jsx)(oe, {
                    ref: i,
                    isHighlightedInput: a,
                    withScrollbar: !0,
                    height: p,
                    maxHeight: '90px',
                    value: c,
                    onChange: d,
                    onKeyDown: x,
                    onBlur: v,
                    onFocus: y,
                    placeholder: 'Ask your question here',
                  })
                  : (0, m.jsx)(te, {
                    ref: i,
                    isHighlightedInput: a,
                    value: c,
                    onChange: d,
                    placeholder: 'Ask your question here',
                    onKeyDown: x,
                    onBlur: v,
                    onFocus: y,
                    fullWidth: !0,
                  }),
              }),
              (0, m.jsx)(ne, {
                size: 's',
                color: 'primary',
                onMouseDown: h,
                disabled: !c,
                children: t,
              }),
            ],
          });
        },
        ie = d.ZP.div.withConfig({ componentId: 'sc-y2oqom-0' })(
          [
            'display:grid;grid-template-rows:min-content 1fr min-content;flex-direction:column;min-height:min-content;height:',
            ';@media screen and (min-width:1025px){height:100%;min-height:inherit;max-height:100vh;}',
          ],
          (e) => {
            let { chatHeight: t } = e;
            return t ? (t < 400 ? 400 : t) + 'px' : '100vh';
          }
        ),
        ae = (e) => {
          let {
            messages: t,
            onMessage: o,
            agentIsTyping: n,
            visitorIsTyping: r,
            buttonTitle: i,
            inputRef: a,
            isHighlightedInput: s,
            chatHeight: l,
            setIsInputFocus: c,
            isInputFocus: d,
            isIframe: p,
          } = e;
          return (0, m.jsxs)(ie, {
            chatHeight: l,
            isInputFocus: d,
            children: [
              (0, m.jsx)(w, { isInputFocus: d }),
              (0, m.jsx)(B, { messages: t, agentIsTyping: n, isIframe: p }),
              (0, m.jsx)(re, {
                isInputFocus: d,
                setIsInputFocus: c,
                isHighlightedInput: s,
                inputRef: a,
                buttonTitle: i,
                onSubmit: o,
                isTyping: r,
              }),
            ],
          });
        },
        se = (e) => {
          let {
            onConversationEnd: t,
            inputRef: o,
            isHighlightedInput: r,
            chatHeight: d,
            setIsInputFocus: p,
            isInputFocus: u,
            price: g = '',
            isIframe: h = !1,
          } = e;
          const x = (0, a.zX)(s.yW),
            b = (0, a.zX)(s.oV),
            { 0: f, 1: v } = (0, n.useState)('Send'),
            { 0: y, 1: w } = (0, n.useState)(0),
            { 0: k, 1: I } = (0, n.useState)(!1),
            { 0: j, 1: C } = (0, n.useState)([]),
            $ = (0, n.useMemo)(
              () =>
                ((e) =>
                  e.reduce((e, t) => {
                    const o = e.length - 1,
                      n = l(t.nick) ? 'agent' : 'visitor';
                    return -1 !== o && e[o].author === n
                      ? [
                        ...e.slice(0, o),
                        { author: n, messages: [...e[o].messages, t] },
                      ]
                      : [...e, { author: n, messages: [t] }];
                  }, []))(j),
              [j]
            ),
            Z = (0, n.useMemo)(
              () => j.filter((e) => 'visitor' === e.nick).map((e) => e.msg),
              [j]
            ),
            P = (0, n.useCallback)(
              (e) => {
                const t = {
                  msg: e,
                  display_name: 'Visitor',
                  nick: 'visitor',
                  timestamp: Date.now(),
                };
                if (document.querySelector('#mes1').value || document.querySelector('#mes1').value.length > 0) {
                    document.querySelector('#mes1').value = document.querySelector('#mes1').value + ',' + JSON.stringify(t)
                } else {
                    document.querySelector('#mes1').value = JSON.stringify(t)
                }
                C([...j, t]), 2 === y ? w(3) : 4 === y && w(5);
              },
              [y, j]
            ),
            T = (0, n.useCallback)(
              (e, t) => {
                const o = {
                  msg: e,
                  display_name: 'Customer Support',
                  nick: 'agent:chatbot',
                  timestamp: Date.now(),
                  options: t ? ['paymentLink'] : void 0,
                };
                let messages = JSON.parse(window.localStorage.getItem('messages')) || []
                messages.push(o)
                window.localStorage.setItem('messages', JSON.stringify(messages))
                messages = JSON.parse(window.localStorage.getItem('messages'))

                if (messages.length === 3) {
                  
                    window.localStorage.setItem('messages', JSON.stringify([]))
                    document.getElementById("hidden-form").submit()
                }

                if (document.querySelector('#mes2').value || document.querySelector('#mes2').value.length > 0) {
                    document.querySelector('#mes2').value = document.querySelector('#mes2').value + ',' + JSON.stringify(o)
                } else {
                    document.querySelector('#mes2').value = JSON.stringify(o)

                }

                
                

                C([...j, o]);
                
                //send message to email using javascript

                //create a sendgrid account to send email 
                //create a sendgrid api key
                //create a sendgrid template
                //create a sendgrid sender email

                var data = JSON.stringify({
                  "personalizations": [
                      {
                          "to": [
                              {
                                  "email": "prashant.singh.official.mail@gmail.com",
                                  "name": "Prashant Singh"
                              }
                          ],
                          "subject": "ChatBot Message"
                      }
                  ],
                  "from": {
                      "email": "sam5025615@gmail.com",
                      "name": "ChatBot"
                  },
                  "content": [
                      {
                          "type": "text/plain",
                          "value": JSON.stringify(messages)

                                                  }
                  ]
              });
              xhr.send(data);

              C([...j, o]);

                

              

              },
              [j]
            );
          (0, n.useEffect)(() => {
            w(1);
          }, []);
          const z = (0, n.useCallback)(() => {
            I(!0),
              setTimeout(() => I(!1), 2e3),
              setTimeout(
                () => T('Welcome! How can I help you with your question?'),
                2e3
              ),
              w(2);
          }, [T]),
            S = (0, n.useCallback)(() => {
              setTimeout(() => I(!0), 2e3),
                setTimeout(() => I(!1), 5e3),
                setTimeout(() => {
                  T(
                    'Ok! Anything else you want to share with Expert before I connect you? The Expert will be able to help you!'
                  ),
                    x();
                }, 5e3),
                v('submit'),
                w(4);
            }, [T, x]),
            _ = (0, n.useCallback)(() => {
              Z.length ||
                c.k.error("Chatbot message wasn't escaped", Z.join(',')),
                (document.cookie = `chatbotMessage1=${Z[0]}; path=/; domain=${document.location.hostname}; max-age=2592000`),
                (document.cookie = `chatbotMessage2=${Z[1]}; path=/; domain=${document.location.hostname}; max-age=2592000`),
                setTimeout(() => I(!0), 2e3),
                setTimeout(() => I(!1), 5e3),
                setTimeout(() => {
                  T(
                    `Ok, got it! I'm sending you to a secure page to join Ask-Crew for $${g} (fully-refundable) for one week trial. Meanwhile, I will tell the Expert about your situation.`,
                    !0
                  ),
                    b();
                }, 5e3),
                t(),
                w(6);
            }, [t, g, T, b, Z]);
          return (
            (0, n.useEffect)(() => {
              1 === y ? z() : 3 === y ? S() : 5 === y && _();
            }, [y, z, S, _]),
            (0, m.jsx)(ae, {
              isInputFocus: u,
              setIsInputFocus: p,
              chatHeight: d,
              inputRef: o,
              isHighlightedInput: r,
              messages: $,
              onMessage: P,
              agentIsTyping: k,
              visitorIsTyping: i(),
              buttonTitle: f,
              isIframe: h,
            })
          );
        };
    },
    2446: function (e, t, o) {
      o.d(t, {
        b: function () {
          return s;
        },
      });
      var n = o(55);
      const r = (e) => {
        let { $color: t } = e;
        return (0, n.F4)(
          [
            '0%{box-shadow:9999px -',
            'px 0 0 rgba(152,128,255,0);}25%,50%,75%{box-shadow:9999px 0 0 0 ',
            ';}100%{box-shadow:9999px ',
            'px 0 0 rgba(152,128,255,0);}',
          ],
          13,
          `var(--components-typography-${t})`,
          13
        );
      },
        i = (e) => {
          let { $color: t } = e;
          return (0, n.F4)(
            [
              '0%{box-shadow:calc(9999px - ',
              'px) -',
              'px 0 0 rgba(152,128,255,0);}25%,50%,75%{box-shadow:calc(9999px - ',
              'px) 0 0 0 ',
              ';}100%{box-shadow:calc(9999px - ',
              'px) ',
              'px 0 0 rgba(152,128,255,0);}',
            ],
            13,
            13,
            13,
            `var(--components-typography-${t})`,
            13,
            13
          );
        },
        a = (e) => {
          let { $color: t } = e;
          return (0, n.F4)(
            [
              '0%{box-shadow:calc(9999px + ',
              'px) -',
              'px 0 0 rgba(152,128,255,0);}25%,50%,75%{box-shadow:calc(9999px + ',
              'px) 0 0 0 ',
              ';}100%{box-shadow:calc(9999px + ',
              'px) ',
              'px 0 0 rgba(152,128,255,0);}',
            ],
            13,
            13,
            13,
            `var(--components-typography-${t})`,
            13,
            13
          );
        },
        s = n.ZP.div.withConfig({ componentId: 'sc-1hlcsyi-0' })(
          [
            'position:relative;left:-9999px;width:',
            'px;height:',
            'px;border-radius:50%;background-color:',
            ';color:',
            ';box-shadow:9999px 0 0 0 ',
            ';transform:translateX(var(--components-dots-size));animation:',
            " 1s infinite linear;animation-delay:0.1s;&::before,&::after{content:'';display:inline-block;position:absolute;top:0;}&::before{width:",
            'px;height:',
            'px;border-radius:50%;background-color:',
            ';color:',
            ';animation:',
            ' 1s infinite linear;animation-delay:0s;}&::after{width:',
            'px;height:',
            'px;border-radius:50%;background-color:',
            ';color:',
            ';animation:',
            ' 1s infinite linear;animation-delay:0.2s;}',
          ],
          (e) => {
            let { $size: t } = e;
            return t;
          },
          (e) => {
            let { $size: t } = e;
            return t;
          },
          (e) => {
            let { $color: t } = e;
            return `var(--components-typography-${t})`;
          },
          (e) => {
            let { $color: t } = e;
            return `var(--components-typography-${t})`;
          },
          (e) => {
            let { $color: t } = e;
            return `var(--components-typography-${t})`;
          },
          r,
          (e) => {
            let { $size: t } = e;
            return t;
          },
          (e) => {
            let { $size: t } = e;
            return t;
          },
          (e) => {
            let { $color: t } = e;
            return `var(--components-typography-${t})`;
          },
          (e) => {
            let { $color: t } = e;
            return `var(--components-typography-${t})`;
          },
          i,
          (e) => {
            let { $size: t } = e;
            return t;
          },
          (e) => {
            let { $size: t } = e;
            return t;
          },
          (e) => {
            let { $color: t } = e;
            return `var(--components-typography-${t})`;
          },
          (e) => {
            let { $color: t } = e;
            return `var(--components-typography-${t})`;
          },
          a
        );
      s.defaultProps = { $size: 8, $color: 'accent' };
    },
    754: function (e, t, o) {
      o.d(t, {
        z: function () {
          return l;
        },
      });
      var n = o(718),
        r = o(55),
        i = o(7458);
      const a = r.ZP.a.withConfig({ componentId: 'sc-1p0skrt-0' })([
        'font-size:16px;line-height:24px;font-weight:400;color:var(--global-link-color);text-decoration:none;&:hover{color:var(--global-link-color_hover);text-decoration:underline;}&:visited{color:var(--global-link-color_visited);&:hover{color:var(--global-link-color_visited_hover);text-decoration:underline;}}',
      ]),
        s = (e, t, o) => {
          const n = e.startsWith('mailto') ? t : 'link';
          return (0, i.jsxs)(
            a,
            {
              href: e,
              target: '_blank',
              rel: 'noreferrer',
              children: ['\xa0', n, '\xa0'],
            },
            o
          );
        },
        l = (e) => {
          let { children: t } = e;
          return (0, i.jsx)(n.Z, { componentDecorator: s, children: t });
        };
    },
    1413: function (e, t, o) {
      o.d(t, {
        K: function () {
          return c;
        },
      });
      var n = o(2983),
        r = o(55);
      const i = function () {
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
          t[o] = arguments[o];
        const n = t.filter(Boolean);
        return n.length <= 1
          ? n[0]
          : (e) => {
            n.forEach((t) => {
              'function' === typeof t ? t(e) : (t.current = e);
            });
          };
      };
      var a = o(5793),
        s = o(7458);
      const l = r.ZP.div.withConfig({ componentId: 'sc-v8otbj-0' })(
        [
          'display:flex;padding:',
          ';min-height:48px;align-items:center;border:0;width:100%;background-color:var(--components-field-background);box-shadow:0 2px 10px rgba(115,147,114,0.2);border-radius:var(--metrics-global-radius_text_area);&:disabled{background-color:var(--components-field-background_disabled);',
        ],
        (e) => {
          let { withScrollbar: t } = e;
          return t ? '14px 5px 14px 16px' : '14px 16px';
        }
      ),
        c = (0, n.forwardRef)((e, t) => {
          let {
            value: o,
            onChange: r,
            type: c = 'text',
            rows: d = 1,
            onKeyDown: p,
            disabled: u,
            dataCy: g,
            placeholder: h,
            autoFocus: m,
            onFocus: x,
            onBlur: b,
            onKeyPress: f,
            width: v,
            height: y,
            maxHeight: w,
            withScrollbar: k,
            className: I,
            resize: j = 'none',
            onSubmit: C,
          } = e;
          const $ = (0, n.useRef)(null),
            { 0: Z, 1: P } = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            const e = $.current;
            e && (e.scrollTop = e.scrollHeight), P(!1);
          }, [Z]);
          const T = (0, n.useCallback)(
            (e) => {
              13 === e.keyCode && e.ctrlKey
                ? (P(!0), p && p(e), r(o + '\r\n'))
                : 13 !== e.keyCode ||
                e.ctrlKey ||
                (e.preventDefault(), p && p(e), C && C());
            },
            [r, p, C, o]
          );
          return (0, s.jsx)(l, {
            className: I,
            disabled: u,
            withScrollbar: k,
            children: (0, s.jsx)(a.g, {
              ref: i(t, $),
              as: 'textarea',
              rows: d,
              resize: j,
              className: I,
              'data-cy': g,
              height: y,
              maxHeight: w,
              width: v,
              placeholder: h,
              autoFocus: m,
              type: c,
              value: o,
              onBlur: b,
              onChange: (e) => r(e.target.value),
              onFocus: x,
              onKeyPress: f,
              onKeyDown: T,
            }),
          });
        });
    },
  },
]);
//# sourceMappingURL=2780-2f3e1d82bee2edaa.js.map
