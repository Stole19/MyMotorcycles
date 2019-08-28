
// Hide Preloader

window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'));


//  Modules

//  Create Cars Module

const CreateCars = (function () {

    // Motorcycle data

    const cars = [];

    //  class motorcycle

    class Car {

        constructor(make, country, img, special, model, price, type, transmision, gas) {

            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.transmision = transmision;
            this.gas = gas;
        }
    }

    //  Motorcycle Creation Function

    function makeCar(make, country, img = 'image/car-default.jpg', special = true, model = 'new model', price = 10000, type, transmision = 'automatic', gas = '50') {

        const car = new Car(make, country, img, special, model, price, type, transmision, gas);

        cars.push(car);
    }

    //  Produce MotorCycles Function

    function produceCars() {

        //  Japan 

        makeCar('yamaha', 'japan', 'images/yamaha/2017_yam_mt10dx_eu_bwm2_stu_00.jpg', true, 'MT10' , '8.999', undefined, 'automatic', '350');
        makeCar('honda', 'japan', 'images/honda/content3.jpg', true, 'CB1000R', '12,299', undefined, 'automatic', '250');
        makeCar('kawasaki', 'japan', 'images/kawasaki/2016-vulcan-900-custom-6.jpg', false, 'vulkan 900', '8,999', undefined, 'manuel', '300');
        makeCar('suzuki', 'japan', 'images/suzuki/suzuki-gsx-r-1000-a-zwart-blau.jpg', true, 'GSX R 1000', '13,250', undefined, 'manuel', '250');
        makeCar('suzuki', 'japan', 'images/yamaha/2016-yamaha-fz-07_silblu-590x4.jpg', false, 'fz-07', '6,990', undefined, 'manuel', '300');

        //  American

        makeCar('harley-davidson', 'american', 'images/harley/harley_davidson_fat_boy-wide (1).jpg', false, 'Fat Boy Special', '15,000', undefined, 'manuel', '450');
        makeCar('harley-davidson', 'american', 'images/harley/harley iron883-thumb.jpg', false, 'iron883', '8,999', undefined, 'manuel', '350');
        makeCar('harley-davidson', 'american', 'images/harley/harley street-750-thumb.jpg', false, 'street-750' , '7,599', undefined, 'automatic', '250');
        makeCar('harley-davidson', 'american', 'images/harley/7630551-0-44604711 (1).jpg', false, 'XL1200X - Sportster' , '11,299', undefined, 'automatic', '300');
        makeCar('harley-davidson', 'american', 'images/harley/2016-harley-davidson-softail-s.jpg', false, 'Softail Slim S', '18,999', undefined, 'automatic', '250');

        //  Italian

        makeCar('ducati', 'italian', 'images/ducati/2000000018.jpg', true, 'XDiavel S', '24.295', undefined, 'automatic', '300');
        makeCar('ducati', 'italian', 'images/ducati/ducati_monster_797111.jpg', false, 'monster 797', '9,295', undefined, 'automatic', '300');


    }

    produceCars();

    // console.log(cars);

    //  Special Motorcycles 

    const specialCars = cars.filter(car => car.special === true);

    // console.log(specialCars);

    return {
        cars,
        specialCars
    }

})();


//  Display Special Cars Module

const DisplaySpecialCars = (function (CreateCars) {


    const specialCars = CreateCars.specialCars;

    const info = document.querySelector('.featured-info');

    //  Document Loaded Event

    document.addEventListener('DOMContentLoaded', () => {

        info.innerHTML = '';

        let data = '';

        specialCars.forEach(item => {

            data += `<!--Single Item-->

            <div class='featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap'>

                <span data-img = '${item.img}' class='featured-icon mr-2'>
                    <i class='fas fa-motorcycle'></i>
                </span>

                <h5 class='font-weight-bold mx-1'>${item.make}</h5>
                <h5 class='mx-1'>${item.model}</h5>

            </div>

            <!--End of Single Item-->`

        });

        info.innerHTML = data;

    });

    //  Change Image


    info.addEventListener('click', function (event) {


        if (event.target.parentElement.classList.contains('featured-icon')) {

            const img = event.target.parentElement.dataset.img;

            document.querySelector('.featured-photo').src = img;
        }

    });


})(CreateCars);


//  Display All Cars Module

const DisplayCars = (function (CreateCars) {

    //  All Cars
    const cars = CreateCars.cars;

    // Car Container
    const inventory = document.querySelector('.inventory-container');

    // Content Loaded EventListener

    document.addEventListener('DOMContentLoaded', () => {

        inventory.innerHTML = '';

        let output = '';

        cars.forEach((car) => {

            output += ` <!--Single Motorcycle-->

            <div class='col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}'>
                <div class=' card car-card'>
                    <img src='${car.img}' class='card-img-top car-img' alt='Ducati'>

                    <!--Card Body-->

                    <div class='card-body'>

                        <div class='car-info d-flex justify-content-between'>

                            <!--First Flex Child-->

                            <div class='car-text text-uppercase'>
                                <h6 class='font-weight-bold'>${car.make}</h6>
                                <h6>${car.model}</h6>
                            </div>

                            <!--End of First Flex Child-->


                            <!--Second Flex Child-->

                            <h5 class='car-value align-self-center py-2 px-3'>
                                $<span class='car-price'>${car.price}</span>
                            </h5>


                            <!--End of Second Flex Child-->

                        </div>

                    </div>

                    <!--End of Card Body-->

                    <!--Card Footer-->

                    <div class='card-footer text-capitalize d-flex justify-content-between'>

                        <p><span><i class='fas fa-cogs'></i></span>${car.transmision}</p>
                        <p><span><i class='fas fa-gas-pump'></i></span>${car.gas}</p>

                    </div>

                    <!--End of Card Footer-->

                </div>

            </div>


            <!--End of Single Motorcycle-->`

        });

        inventory.innerHTML = output;

    });



})(CreateCars);


//  Filter Cars Module

const FilterCars = (function(){

const filter = document.querySelectorAll('.filter-btn');

filter.forEach((btn) => {

btn.addEventListener('click', (event) => {

    const value = event.target.dataset.filter;

   const singleCar = document.querySelectorAll('.single-car');

   singleCar.forEach((car) => {

    if(value === 'all'){

        car.style.display = 'block';

    } else {

        (!car.classList.contains(value)) ? car.style.display = 'none' : car.style.display = 'block';

    }




   });

});

});



})();