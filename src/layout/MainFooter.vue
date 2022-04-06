<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#/">
              Wander @ SG
            </a>
          </li>
          <li>
            <a href="#/#about">
              About Us
            </a>
          </li>
          <li>
            <a href="https://www.klook.com/en-SG/">
              Klook
            </a>
          </li>
          <li>
            <a href="https://www.kkday.com/en-sg">
              KKDAY
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
        <a href="https://github.com/heyvinnnny/wandersg" target="_blank"
          >Wander @ SG <br />
          BT3103 Group L1-14</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
