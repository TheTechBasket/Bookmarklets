javascript: void((function(svc) {
    var d = document,
        w = window,
        p = 0,
        b = function() {
            if (!p) {
                p = 1;
                if (_atc.xol) _adr.onReady();
                if (w.addthis_sendto) addthis_sendto(svc || 'bkmore', {
                    product: 'bmt-' + _atc.ver
                })
            } else {
                p = 0;
                if (_atw) _atw.clb()
            }
        };
    if (!w._atc) {
        var ol = w.addthis_onload || [],
            o = d.createElement('script');
        w.addthis_product = 'bmt-250';
        o.src = '//s7.addthis.com/js/250/addthis_widget.js#domready=1&username=bookmarklet';
        ol.push(b);
        w.addthis_onload = ol;
        d.getElementsByTagName('body')[0].appendChild(o)
    } else b()
})())