var CI360_TEILNEHMERNUMMER = null;
try {
    CI360_TEILNEHMERNUMMER = TEILNEHMERNUMMER;
} catch (error) {
    console.log(error);
}
(function (ci, a) {
    window[ci] || function () {
        var ef = window[ci] = function () {
            return ef.q.push(arguments);
        }; ef.q = []; ef.a = a || {};
    }();
})
    ('ci360', {
        tenantId: '55cca7442f00010d1e64bd0a',
        identity: {
            source: 'jsvar', type: 'login_id', name: 'CI360_TEILNEHMERNUMMER',
            obscure: true
        }
    });

var dcrmScript = document.createElement("script");
dcrmScript.src = "https://execution.ci360.tpp.commerzbank.de/js/ot-all.min.js";
dcrmScript.async = true;
dcrmScript.setAttribute("data-efname", "ci360");
dcrmScript.id = "ob-script-async";
dcrmScript.setAttribute("integrity", "sha512-OiCgh6d02OgmL8qPGtOOS4NQYHMfvU3O3Za7eEQl9voNufVefqmqK/m3frzuyNSVWnme6U2ZAhmlbl0+aTe4ww== sha512-2uxDAG7bzs/bSqnfQ8wPBGqWP0ZUSXjMsxfgavugVXcRL670pQemcnqfnGC6ngmgJ2htK9hT7ja3F0uSpUrklw==");
dcrmScript.crossOrigin = "anonymus";

document.head.appendChild(dcrmScript);