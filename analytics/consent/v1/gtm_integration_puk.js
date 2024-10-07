  // for PUK_PROD_BOTH
  var gtmScriptincludeVersion = "2.4";
  // Push "Google Analytics ID" in data layer
              window.uaID = 'UA-76726625-1';  // set static to PUK PROD
        
              (window.dataLayer = window.dataLayer || []).push({
                  'uaID': window.uaID
              });


  if (window.cookieBox && window.cookieBox.isInitialised) {
      initGTM();
  } else {
      window.addEventListener('consents_initialized', function () {
          initGTM();
      })
  }

  function initGTM() {
    //Push "GTM Custom Template Restrictions" in data layer
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('policy', 'all', function (container, policy, data) {
        var allowedVars;
        var allowedScripts;
        var allowedPixeldomain;
        //Allow Facebook Tag for open area and content pages in closed area
        var curUrl = document.location.hostname + document.location.pathname;
        
        var openAreaGuidelines = '^www\.commerzbank\.de';
        var closedAreaGuidelines = '^kunden\.commerzbank\.de(\/portal|\/filialen|\/web|\/index|\/privatkunden|\/unternehmerkunden|\/firmenkunden|\/wealth-management|\/magazin|\/themenwelt|\/themen|\/wissen|\/kontakt|\/blog|\/hinweise|\/beratung|\/kredit-finanzierung|\/konten-zahlungsverkehr|\/sparen-anlegen|\/vorsorgen-versichern|\/investieren|\/service|\/ratgeber)($|\/)';
    

        if (curUrl.match(openAreaGuidelines) || curUrl.match(closedAreaGuidelines)) {
            allowedVars = ['fbq', '_fbq_gtm', '_fbq', 'fbq.queue', '_fbq_gtm_ids', 'fbq.callMethod.apply', 'fbq.queue.push'];
            allowedScripts = ['https://connect.facebook.net/en_US/fbevents.js'];
            allowedPixeldomain = ['https://sslwidget.criteo.com/', 'https://bat.bing.com']
        }
        switch (policy) {
            case 'access_globals':
                var curVar = data.key || '';
                if (allowedVars.indexOf(curVar) != -1) {
                    return true;
                }
            case 'inject_script':
                var curScript = data.url || '';
                if (allowedScripts.indexOf(curScript) != -1) {
                    return true;
                }
            case 'set_cookies':
                var curCookie = data.name || '';
                var cookieDeletionList = '_ga,_gid,_fbp,_gcl_au,_gaexp';
                if (cookieDeletionList.indexOf(curCookie) != -1 || curCookie.indexOf('_gat') != -1 || curCookie.indexOf('_gac') != -1) {
                    return true;
                }
            case 'send_pixel':
                var curPixel = data.url || '';
                const matchedDomains = allowedPixeldomain.filter(function (domain) {
                    if (curPixel.indexOf(domain) !== -1) {
                        return true;
                    }
                });
                if (matchedDomains.length > 0) {
                    return true;
                }
            case 'read_data_layer':
              return true;                      
            case 'read_container_data':
                return true;            
            case 'access_template_storage':
                return true;
            case 'access_local_storage':
                return true;
            case 'load_google_tags':
                return true;
            case 'configure_google_tags':
                return true;
            case 'read_event_data':
                return true;
            case 'detect_timer_events':
                return true;
            case 'detect_click_events':
                return true;
            case 'detect_link_click_events':
                return true;
            case 'get_url':
                return true;
            default:
                return false;
        }
    });
    // Push "GTM Whitelist" in data layer
    var allowedTags = ['ga', 'ua', 'cl', 'tl', 'lcl', 'jel', 'v', 'e', 'dbg', 'u', 'd', 'fsl', 'sandboxedScripts', 'gaawe', 'gaawc', 'smm', 'cid', 'remm', 'tg', 'gas', 'evl', 'sdl', 'ytl', 'c', 'ctv', 'vis', 'r', 'f','googtag','gtes'];
    var curUrl = document.location.hostname + document.location.pathname;
    var openAreaGuidelines = '^www\.commerzbank\.de';
    var closedAreaGuidelines = '^kunden\.commerzbank\.de(\/portal|\/filialen|\/web|\/index|\/privatkunden|\/unternehmerkunden|\/firmenkunden|\/wealth-management|\/magazin|\/themenwelt|\/themen|\/wissen|\/kontakt|\/blog|\/hinweise|\/beratung|\/kredit-finanzierung|\/konten-zahlungsverkehr|\/sparen-anlegen|\/vorsorgen-versichern|\/investieren|\/service|\/ratgeber)($|\/)';
    if (curUrl.match(openAreaGuidelines) || curUrl.match(closedAreaGuidelines)) {
      allowedTags = ['ga', 'ua', 'cl', 'tl', 'lcl', 'jel', 'v', 'e', 'dbg', 'u', 'd', 'fsl', 'sandboxedScripts', 'awct', 'sp', 'flc', 'fls', 'gaawe', 'gaawc', 'smm', 'cid', 'remm', 'tg', 'gas', 'evl', 'sdl', 'ytl', 'c', 'ctv', 'vis', 'r', 'f','googtag','gtes'];
    };
    (window.dataLayer = window.dataLayer || []).push({
        'gtm.whitelist': allowedTags
    });
    // Push "GTM Start Event" in data layer
    (window.dataLayer = window.dataLayer || []).push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    // Predefined Function to get specific URL parameter
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Get Main Domain
    var domainParts = document.location.host.split('.');
    var mainDomain = '.' + domainParts[domainParts.length - 2] + '.' + domainParts[domainParts.length - 1];
    // Predefined Function to set Cookie
    function setCookie(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
        document.cookie = name + '=' + value + expires + ';domain=' + mainDomain + '; path=/';
    }
    //Predefined Affiliate OptOut Function
    function affiliateOptOut() {
        setCookie('affiliateOptOut', 'true', 1095);
        document.cookie = 'afid=deleted; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=' + mainDomain + '; path=/;';
        document.cookie = 'afid=deleted; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=www' + mainDomain + '; path=/;';
        window.confirm('Ihr Widerruf wurde erfolgreich mit Wirkung für die Zukunft umgesetzt.')
    }

    // Set Affiliate ID into Cookie
    var afid = getUrlParameter('afid');
    var cookieList = document.cookie;
    if (afid != '' & cookieList.indexOf('affiliateOptOut') == -1) {
        setCookie('afid', afid, 60);
    }


    //Set Template-ID for Tag Management Service: mIEB9cNKW
    var consent = window.cookieBox.getConsents('Tag Management');

    var default_gtm_id = 'GTM-N6W8QC';  
    //provisional fix start
    var closedAreaRule = '.*(\/portal\/de\/system\/logout|\/lp\/login|\/lp\/approval\/start|\/startpage|\/banking|\/dailybanking|\/digitalbanking|\/mypostbox|\/_next|\/digitalassistant|\/wpfe|\/chat|\/kontoservices\/antrag|\/kontoservices\/pk|\/kontoservices\/uk|\/kredit\/ratenkredit\-kunden|\/kservice\/anfrage\-kunden|\/digitalconsent).*';

    if (  curUrl.match(closedAreaRule)  ) {
        default_gtm_id = "GTM-PMKT8F";   //closed
        } 
     //provisional fix end
    if ((window && window.gtmAreaCode && window.gtmAreaCode === 1)) {
        default_gtm_id = "GTM-PMKT8F";
    }
    


    if (consent.consentStatus) {
      loadGTM();
    } else {
      // new for FK
      dataLayer.push = function (n) {
          //Basic Object Push
          dataLayer[this.length] = n;
          //GTM Integration
          if (n["event"] == "all_consents_given_status") {
              var consent = window.cookieBox.getConsents("Tag Management");
              if (consent.consentStatus) {
                loadGTM()
              }
      }
  }  
    }

    function loadGTM(){
        // Include GTM
        //window.gtmId = window.googleTrackingGTM || default_gtm_id;
        window.gtmId = default_gtm_id;
        (function (w, d, s, l, i) {
            var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = '//tp.commerzbank.de/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', window.gtmId);
    }
  }
