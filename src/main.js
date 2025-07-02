import { defineCustomElement } from 'vue'
import InputText from './components/InputText.ce.vue'

//registrar el componente como custom element
const InputTextElement = defineCustomElement(InputText)
customElements.define('input-text', InputTextElement)
