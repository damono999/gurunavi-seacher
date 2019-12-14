<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  created: function() {

    let form = this.$route.query['form'];
    form.keyid = 'ae555c660c3b51ba8a093d9b477d909b';
    // form = Object.assign({}, form, {keyid: 'ae555c660c3b51ba8a093d9b477d909b'})
    axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/`,
      {
        params: form
      })
      .then(({ data }) => {
        this.stores.push(...data.rest);
      }).catch((err) => {
        console.log(`err: ${err}`);
      });
  },
  data() {
    return {
      stores: [],
    }
  },
}
</script>