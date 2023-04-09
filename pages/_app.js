import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <Head>
<script type="text/javascript" async=true>
                  (function() {
  var host = 'www.themoneytizer.com';
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://cmp.quantcast.com'
    .concat('/choice/', '6Fv0cGNfc_bw8', '/', host, '/choice.js');
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
                      setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
                      gdprApplies = args[3];
          if (typeof args[2] === 'function') {
                      args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
                      gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
                      args[2](retr);
        }
      } else {
        if(args[0] === 'init' && typeof args[3] === 'object') {
                      args[3] = { ...args[3], tag_version: 'V2' };
        }
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = { };

      try {
        if (msgIsString) {
                      json = JSON.parse(event.data);
        } else {
                      json = event.data;
        }
      } catch (ignore) { }

      var payload = json.__tcfapiCall;

      if (payload) {
                      window.__tcfapi(
                          payload.command,
                          payload.version,
                          function (retValue, success) {
                              var returnMsg = {
                                  __tcfapiReturn: {
                                      returnValue: retValue,
                                      success: success,
                                      callId: payload.callId
                                  }
                              };
                              if (msgIsString) {
                                  returnMsg = JSON.stringify(returnMsg);
                              }
                              if (event && event.source && event.source.postMessage) {
                                  event.source.postMessage(returnMsg, '*');
                              }
                          },
                          payload.parameter
                      );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
                      cmpFrame = win;
          break;
        }
      } catch (ignore) { }

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
                      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
                      setTimeout(function () {
                          if (typeof window.__uspapi !== 'undefined') {
                              window.__uspapi.apply(window.__uspapi, arg);
                          }
                      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
                      uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
                      console.warn('USP is not accessible');
    } else {
                      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
                      window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
</script>
<div style="text-align:center;" id="96789-31"><script src="//ads.themoneytizer.com/s/gen.js?type=31"></script><script src="//ads.themoneytizer.com/s/requestform.js?siteId=96789&formatId=31"></script></div>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
