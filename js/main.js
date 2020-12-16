Vue.component('top-menu', {
  props: {
    activeTab: {
      type: String,
      default: 'home'
    }
  },
  template: `
  <nav>
    <a href="./index.html" :class="{activeTab: activeTab === 'home'}">Home</a>
    <a href="./interests.html" :class="{activeTab: activeTab === 'interests'}">About Me</a>
    <a href="./family.html" :class="{activeTab: activeTab === 'family'}">Family</a>
    <a href="./contact.html" :class="{activeTab: activeTab === 'contact'}">Contact</a>
  </nav>`
});

const apps = new Vue({
  el: '#apps',
  data: {
    message: 'Hello Vue!'
  }
});


const app = new Vue({
  'el': '#contactform',

  data: {
    contact: {
      name: '',
      email: '',
      message: '',
    },
  },

  methods: {

    /**
     * Clear the form
     */
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = ''
      }
    },

    /**
     * Handler for submit
     */
    onSubmit(evt) {
      evt.preventDefault();

      setTimeout(() => {}, 1000);
    }
  }

});


window.app = app;