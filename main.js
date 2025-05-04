$(document).ready(function() {
    console.log('document ready')

    const randomNum = (min = 0, max = 10) => {
        return Math.ceil(Math.random() * ((max - min + 1) + 1)) + min;
    };

    const skyHeight = randomNum(30, 45);
    const groundHeight = 100-skyHeight;

    $('#groundContainer').css('height', groundHeight + 'vh')

    const createSky = () => {
        console.log('createSky with width:', window.innerWidth, 'height', window.innerHeight);
        const pixelSeed = 15;
        const cloudSeed = Math.floor(window.innerWidth / 250);

        $('#skyContainer').css('height', skyHeight + 'vh')
        createClouds(cloudSeed, pixelSeed);
        createMoon();
    }

    const createClouds = (cloudSeed, pixelSeed) => {
        console.log('createClouds');
        const pixelCount = (randomNum() * pixelSeed) / 10;
        const cloudCount = (randomNum() * cloudSeed) / 10;
        
        for (let i = 0; i <= cloudCount; i++) {
            let random = randomNum(0, 100);
            let pixel_size;
            
            if (random >= 28 && random <= 85) {
                pixel_size = 40;
            } else if (random < 28){
                pixel_size = 20;
            } else {
                pixel_size = 10;
            }   
            
            console.log('creating:', cloudCount, 'clouds with:', pixelCount, 'pixels')
            createSingleCloud(pixelCount, pixel_size);
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
            const cluster_x = pixel_size * randomNum(0, 5);
            const cluster_y = pixel_size * randomNum(0, 5);

            console.log(cluster_x, cluster_y, 'pixel size:', pixel_size)

            const cloud_width = pixel_size * randomNum(0, 5);
            const cloud_height = pixel_size * randomNum(0, 3);

            const cloud_pixel = $("<div>");
            cloud_pixel.addClass('cloudPixel');

            cloudContainer.append(cloud_pixel);
            
            cloud_pixel.css('left', cluster_x);
            cloud_pixel.css('bottom', cluster_y);

            cloud_pixel.css('width', cloud_width + 1);
            cloud_pixel.css('height', cloud_height + 1);

            let random = randomNum(1, 10);
            if (random <= 1) {
                cloud_pixel.css('background-color', "rgb(245,245,245)")
            } else if (random > 1 && random <= 9) {
                cloud_pixel.css('background-color', "rgb(255,255,255)")
            } else {
                cloud_pixel.css('background-color', "rgb(250,250,250)")
            }

            random = randomNum(1, 10);
            if (random <= 3) {
                cloud_pixel.css('opacity', "85%")
            } else if (random > 9) {
                cloud_pixel.css('opacity', "70%")
            } else {
                cloud_pixel.css('opacity', "100%")
            }
        }
        
        $('#skyContainer').append(cloudContainer)

        let testNum = randomNum(0,10) * (window.innerWidth/7);
        cloudContainer.css('left', randomNum(0, (window.innerWidth)) - 150)
        cloudContainer.css('bottom', 50 * Math.floor(Math.random() * 3))
    }

    const createGround = () => {
        createBuildings();
        let mountainContainer = $('<div>');
        let mountainPixel_size = 20;
        let numPixels = 10;
        let numRows = 3
        
        for (let i = 0; i < numPixels; i++) {
            let mountainPixel = $('<div>');
            mountainPixel.addClass('mountainPixel')
            mountainPixel.css('width', mountainPixel_size)
            mountainPixel.css('height', mountainPixel_size)

            if (i == 0) {
                mountainPixel.css('left', '0');
                mountainPixel.css('top', '0');
            } else {
                mountainPixel.css('left', i * mountainPixel_size)
                mountainPixel.css('top', i * mountainPixel_size)
            }
            mountainContainer.append(mountainPixel)
        }


        $('#groundContainer').append(mountainContainer)
    }
     
    createSky();
    createGround();
})