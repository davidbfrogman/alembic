export const environment = {
    production: false,
    IdentityAPIBase: 'https://test.identity.alembic.io/api',
    V1: '/v1',
    ProductAPIBase: 'https://test.product.alembic.io/api',
    WooConsumerKey: 'ck_d98c021485c82e711c53420f72d34e602ae1ad1b',
    WooConsumerSecret: 'cs_37d8a7cb7e932c5303a2dae67ed17cad4e620f3e',
    // curl https://alembic.com/wp-json/wc/v2/orders -u ck_d98c021485c82e711c53420f72d34e602ae1ad1b:cs_37d8a7cb7e932c5303a2dae67ed17cad4e620f3e
    // get all ->  curl -u alembic:alembic99 "https://staging.alembic.com/wp-json/wc/v2/orders?consumer_key=ck_d98c021485c82e711c53420f72d34e602ae1ad1b&consumer_secret=cs_37d8a7cb7e932c5303a2dae67ed17cad4e620f3e"
    // get single -> curl -u alembic:alembic99 "https://staging.alembic.com/wp-json/wc/v2/orders/2280?consumer_key=ck_d98c021485c82e711c53420f72d34e602ae1ad1b&consumer_secret=cs_37d8a7cb7e932c5303a2dae67ed17cad4e620f3e"
    WooApiLocation: 'https://staging.alembic.com/wp-json/wc/v2',
    WooStagingUser: 'alembic',
    WooStagingPass: 'alembic99'
  };
  