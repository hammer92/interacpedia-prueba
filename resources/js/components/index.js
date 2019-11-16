import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import Modal from './Modal'
import vueFile from './vueFile'
import { HasError, AlertError, AlertSuccess } from 'vform'
import { SemipolarSpinner  } from 'epic-spinners'


// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess,
  Modal,
  vueFile,
  SemipolarSpinner
].forEach(Component => {
  Vue.component(Component.name, Component)
})
