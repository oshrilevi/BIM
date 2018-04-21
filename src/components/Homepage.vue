<template>
  <div>
    <h1 v-translate>Hello</h1>

    <md-card> 
      <md-card-header>
        <div class="md-title">Card without hover effect</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {};
  },
  locales: {
    hebrew: {
      Hello: "שלום"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
