<template>
  <Layout>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Articles</h1>
        <Articles :articles="articles" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allStrapiArticle {
    edges {
      node {
        id
        slug
        title
        category {
          name
        }
        image {
          url
          downloaded(width: 680, height: 450)
        }
        author {
          id
          name
          picture {
            url
            downloaded(width: 30, height: 30)
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Articles from "~/components/Articles";

export default {
  components: {
    Articles,
  },
  computed: {
    articles() {
      return this.$page.allStrapiArticle.edges.map(({ node }) => node);
    },
  },
};
</script>
