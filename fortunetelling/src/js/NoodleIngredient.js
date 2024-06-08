// Custom component <noodle-ingredient>

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

/**
 * Define custom component <noodle-ingredient>
 */
class NoodleIngredient extends HTMLElement {
    /**
     * constructor of the custom component
     */
    constructor() {
        super(); // Inheret everything from HTMLElement
    
        // Attach the shadow DOM to this Web Component 
        const shadow = this.attachShadow({ mode: "open" });
        const textEle = document.createElement('p');      
        const buttonEle = document.createElement('button');  
        const styleEle = document.createElement('style'); 
        textEle.innerHTML = 'ingredient';
        buttonEle.innerHTML = `  
            <svg id="trash" width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.41346 0V1.66667H0V5H1.68269V26.6667C1.68269 27.5507 2.03726 28.3986 2.66839 29.0237C3.29952 29.6488 4.15552 30 5.04808 30H21.875C22.7676 30 23.6236 29.6488 24.2547 29.0237C24.8858 28.3986 25.2404 27.5507 25.2404 26.6667V5H26.9231V1.66667H18.5096V0H8.41346ZM5.04808 5H21.875V26.6667H5.04808V5ZM8.41346 8.33333V23.3333H11.7788V8.33333H8.41346ZM15.1442 8.33333V23.3333H18.5096V8.33333H15.1442Z" fill="black"/>
            </svg>
            <svg id="redo" class="hidden" width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 20.5714L18.375 30L15.89 27.5829L21.2975 22.2857H11.375C5.0925 22.2857 0 17.2971 0 11.1429C0 4.98857 5.0925 0 11.375 0H24.5V3.42857H11.375C7 3.42857 3.5 6.85714 3.5 11.1429C3.5 15.4286 7 18.8571 11.375 18.8571H21.2975L15.9075 13.56L18.375 11.1429L28 20.5714Z" fill="black"/>
            </svg>
        `;
        styleEle.innerHTML = `
            p{
                font-size: 20px;
                font-family: 'Fredoka', 'Montserrat', sans-serif;
                font-weight: 400;
                margin: 0;
                margin-left: 20px;

            }
            button{
                display: flex;
                background: none;
                border: none;
                cursor: pointer;
                padding: 10px 20px;
                border-radius: 10px;
            }
            button:hover{
                background-color: #F1EAD6;
            }

            /* Apply changes when button is clicked */
            .hidden{
                display: none;
            }
            .crossedOut{
                text-decoration: line-through;
            }
            @media only screen and (max-width: 767px), 
            screen and (max-height: 480px){
                p{
                    font-size: 18px;
                }
            }   
            button:hover{
                background-color: none;
            }         
        `;

        buttonEle.addEventListener('click', this.handleClick.bind(this));
        shadow.append(textEle, buttonEle, styleEle);
    }


    /**
     * @returns {String} data the name of the ingredient in String
     */
    get data(){
        return this.getAttribute('data');
    }

    /**
     * Setting the data attribute to be the ingredient name
     * @param {String} data
     */
    set data(data) {
        if (!data){
            console.log('no data! in');
            return;
        } 

        this.setAttribute('data', data);

        // console.log('yes data! in');
        const myShadowDom = this.shadowRoot;
        let textEle = myShadowDom.querySelector('p');
        let ingredient = 'Unknown ingredient';
        if(data !== undefined && data !== ''  && data !== null){
            ingredient = String(data);
        }
        textEle.innerText = ingredient;
    }

    /**
     * handle the trash/redo button click event
     * switch the button icon, cross out name, gray out background
     */
    handleClick() {
        // send out a custom event to trigger changes in ingredients.js
        this.dispatchEvent(new CustomEvent('toggleIngredient', {
            detail: { message: 'Toggle an ingredient' }
        }));

        const myShadowDom = this.shadowRoot;
        let trash = myShadowDom.querySelector('#trash');
        let redo = myShadowDom.querySelector('#redo');
        let textEle = myShadowDom.querySelector('p');
        trash.classList.toggle('hidden');
        redo.classList.toggle('hidden');
        textEle.classList.toggle('crossedOut');
    }
}

// Define the Class as a customElement so that you can create 'noodle-ingredient' elements
customElements.define('noodle-ingredient', NoodleIngredient);