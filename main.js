$(document).ready(function() {
    console.log('document ready')
    const createSky = () => {
        console.log('createSky');
    
        createClouds();
        createMoon();
    }

    const createClouds = () => {
        console.log('createClouds');
        const numPixels = Math.floor(Math.random() * 15);
        const numClouds = Math.ceil(Math.random() * 11);
        
        for (let i = 0; i <= numClouds; i++) {
            let random = Math.random();
            let pixel_size;
            
            if (random >= 0.28 && random <= 0.85) {
                pixel_size = 40;
            } else if (random < 0.28){
                pixel_size = 20;
            } else {
                pixel_size = 10;
            }   
            
            console.log('creating:', numClouds, 'clouds with:', numPixels, 'pixels')
            createSingleCloud(numPixels, pixel_size);
        }
    }
    
    const createMoon = () => {
        console.log('createMoon');
    }
    
    const createSingleCloud = (numPixels, pixel_size) => {
        const cloudContainer = $("<div>");
        cloudContainer.addClass('cloudContainer');
        cloudContainer.css('bottom', '0');

        for (let i = 0; i <= numPixels; i++) {
            console.log('adding pixel')
            const cluster_x = pixel_size * (Math.floor(Math.random(0, 4) * (5)));
            const cluster_y = pixel_size * (Math.floor(Math.random(0, 4) * (5)));

            const cloud_width = pixel_size * Math.ceil(Math.random() * 5);
            const cloud_height = pixel_size * Math.ceil(Math.random() * 3);

            const cloud_pixel = $("<div>");
            cloud_pixel.addClass('cloudPixel');

            cloudContainer.append(cloud_pixel);
            
            cloud_pixel.css('left', cluster_x);
            cloud_pixel.css('bottom', cluster_y);

            cloud_pixel.css('width', cloud_width + 1);
            cloud_pixel.css('height', cloud_height + 1);

            let random = Math.random() * 10;
            if (random <= 1) {
                cloud_pixel.css('background-color', "rgb(245,245,245)")
            } else if (random > 1 && random <= 9) {
                cloud_pixel.css('background-color', "rgb(255,255,255)")
            } else {
                cloud_pixel.css('background-color', "rgb(250,250,250)")
            }

            random = Math.random() * 10;
            if (random <= 3) {
                cloud_pixel.css('opacity', "85%")
            } else if (random > 9) {
                cloud_pixel.css('opacity', "70%")
            } else {
                cloud_pixel.css('opacity', "100%")
            }
        }
        
        $('#skyContainer').append(cloudContainer)
        cloudContainer.css('left', 50 * Math.ceil(Math.random() * (window.innerWidth/50)))
        cloudContainer.css('bottom', 50 * Math.floor(Math.random() * 3))
    }
     
    createSky();
})