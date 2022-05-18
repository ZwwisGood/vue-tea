//引入sdk
const AlipaySdk = require('alipay-sdk').default
const alipaySdk = new AlipaySdk({
    //AppId
    appId: '2021000119696735',
    //签名算法
    signType:'RSA2',
    //支付宝网关
    gateway: 'https://openapi.alipaydev.com/gateway.do',
    //支付宝公钥
    alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz31NUO8MIdgTA/TTTn1Zlnw47O+CQXanVo7I42edci2SAX6b2ErFRDuYedqputjHbGIST7nVv9m8CXRV9EhBNhKUJnbP2hYrqHMhfO9E8ybA0dRAbd7CcxrmYMsn0U/vAS5XJqpQZZOa031KA0llT5SFqi9hRk5Ufo4l176MBkFE62BMIS5jfWmxEM4O/iJBi4xbpDn+Doa7U4aKvxryF5cDXyGHrvjXySsaiHsCoS9suTQMHXo12BcfwGBaOxmYhmO6JVJV4vsWF0Dy6yauujbN9rZYso0YNdTJoW3K9/8FGAyXVP5pe2/6HA6MgozAaVrqaYnahIZ1v/I3DJeeywIDAQAB',
    //应用私钥
    privateKey: 'MIIEpgIBAAKCAQEAilhxV1bCNj9ow6s5V1Uc1AyQPN8siYnCuOW7EvM7ZuSBSDAQ87LNdmD+Wk8/KFjSIGgWnaTP2aYgeDtwKsb3OWsG2iZaWJUxv9UGK3YQjiLCeQRf5h0LOBjBYgraae52WSDi2nV76HAxd65qnh8rMkmG2K2A46W609erv1oMTyud0UK7oPW6EeTaZfz/0vZREdphIf/TpQfY+lMC/1shnSxYEO2Rc/4jkiODccODSvTilGTOXZRbryyvNxtwGHv0bnet70C5SouSd15ePcct0dsD1emh4mpsD1Nzv+RUpuv7o5eQ5DzAYtPEj8s+ervmKoGfg5r0XyZ9BSe/LeqV6wIDAQABAoIBAQCFCMltEEvP+KfYyRVp6rm/G5m0P3PHisbKIHgFoAo2RnQfo8EZZ452UI0m8N+t/8OIUC+3Rl5tUHgWxil1qUDhYQ8Exi7I0ic17jZxoqYG2FwkHVXOpY09U2jay87+YMZDrQEYzDLr8L9Q9FMoXJagU94tDKNNxffjcJiCeKgvlC1Ul93GplTaa7lp/dnOSW4Hid9YGxGke9f3Z11icDjNuz78fWBVDK39sZcOhohlprRJWrrigcrWynJubrrba0a2X4y9t+U309vRFyX85vSRwe/dE4hSOJ1Za4utIUAB40FuU+u5qljLez2wwxE9pIhd4I2i+JoNjAfHrMurZ3pJAoGBAPcDasgAfR9eNBRXDfBz+P3d7rDD9Qc8wiMfma4zOrPYonFbdy5xmqP+GLJV+D0AaH9TIpaQBKDQW4G5BY5Q3sdCPlbncXzWvT2RxLlatOH1hqa8i8MqV2L8+CfrA4VbkEpZbuj2T/lcR50kByVtJZNfr3n+jGlhJe2H89fPKuY9AoGBAI9g79TbrSRXINg7xlJZ4OBnIecXsksrC7i1hYP1p8+MMlW4UyT1XIDQ02LK6RENVOD8aM+2ur8hEs8LU0rMLu79r+ORNGZe5dlKUBpSvWhtQaaj1dG6tPZN8tiYFaIbSSfccnkR+/W4dfpjWall9LP9TB5Ib8IHjUvHSzcKPldHAoGBAI1+mptIlGP0jXadS3HSrO2XRJRjG6fyqO5/uoOr+tNso9i1YTbsgn2wHyuAzXr8Ed/lmmmOw+fukoxjlQgp0QNpMdaMK1kslSiAqKTYjcbl4yT92j2IspgUen47REAO7D96rWqrNbKMpsUgDyvkMuMRq64BHyN6L8S53PdhR5ytAoGBAI827piZjQq9lOsoWeKsMDk2CuFABDGdH6oydtjmqeZgTW7eHP7PrsRk0qDduYv02xGYTkEcbtC3AoiY8WvHJCJIeEZBJiwTIle3KOgCOXtzlp4TDGLfsh5MogPDdehkhOAyDI3ubtR0mjOuxUK1uoWGv1+IT0lqLbLBsNmbe8XFAoGBANot8nQT7kOcCcGue8cEMViEv5VAC50jUtuIrmhI6xCO9IIMe1twxrHgh1j+E1jypBR1LJlxb+xqT7JvKRTAF3FoapWSJrVUG7i27gl0WKeKoEN7D/WSthZLN/aRAJPGscdnH+HJCqw8w+J5yp67Asik4NfseP3cO44gn0DMl/KN'
  });

  module.exports = alipaySdk