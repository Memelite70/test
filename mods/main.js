
        function detectChromeOS() {
            const isChromeOS = navigator.userAgent.includes('CrOS');
            if (isChromeOS) {
                document.getElementById('container').style.display = 'block';
                document.getElementById('iframe').src = "./src/";
            } else {
                document.getElementById('container').style.display = 'block';
                document.getElementById('iframe').src = "//britannica.com/topic/world-history";
                window.location(document.getElementById('iframe').src);
            }
        }
