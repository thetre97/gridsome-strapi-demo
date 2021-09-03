<template>
  <div>
    <div>
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <g-link to="/">{{ $static.strapi.global.siteName }}</g-link>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <button
            class="uk-button uk-button-default uk-margin-right"
            type="button"
          >
            Categories
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
