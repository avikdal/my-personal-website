document.addEventListener('DOMContentLoaded',() => {
    const header = document.querySelector('header');
    const backgrounds = ['#d5f4e6','#80ced6','#ffeead','#618685'];
    const largeNums = [30, 35, 40, 45];
    const smallNums = [3, 4, 5, 6];

    const coordinates = {
        x: undefined,
        y: undefined
    };

    const generateNumber = () => {
        return Math.floor(Math.random() *4);
    }

    const createRandomNumber = () => {
        const width = generateNumber();
        const height = generateNumber();
        const color = generateNumber();
        return [width, height, color];
    }

    const configureWideElement = newEle => {
        const [width, height, color] = createRandomNumber();
        newEle.style.width = largeNums[width] + 'px';
        newEle.style.height = smallNums[height] + 'px';
        newEle.style.backgroundColor = backgrounds[color];
        newEle.classList.add('line', 'line-wide');
    }

    const configureTallElement = newEle => {
        const [width, height, color] = createRandomNumber();
        newEle.style.width = smallNums[width] + 'px';
        newEle.style.height = largeNums[height] + 'px';
        newEle.style.backgroundColor = backgrounds[color];
        newEle.classList.add('line', 'line-high');
    }

    const addElement = () => {
        const typeNum = Math.round(Math.random());
        const newEle = document.createElement('div');
        
        if(typeNum === 0) {
            configureWideElement(newEle);
        } else {
            configureTallElement(newEle);
        }
        newEle.style.left = coordinates.x + 'px';
        newEle.style.top = coordinates.y + 'px';

        header.appendChild(newEle);
    }

    const updateCoordinates = e => {
        if(coordinates.x === undefined || coordinates.y === undefined){
            coordinates.x = e.x;
            coordinates.y = e.y;
            addElement();
        }

        if(Math.abs(coordinates.x - e.x) > 50 || Math.abs(coordinates.y - e.y) > 50) {
            coordinates.x = e.x;
            coordinates.y = e.y;
            addElement();
        }
        
    };

    header.addEventListener('mousemove', e => {
        updateCoordinates(e);
    });
});