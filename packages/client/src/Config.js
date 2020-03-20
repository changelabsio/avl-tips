
export default {
    city: process.env.city || "Asheville",
    state: process.env.state || false,
    mailto: process.env.mailto || "inquiries@avl.tips",
    form: {
        url: process.env.form_url || "https://docs.google.com/forms/d/e/1FAIpQLSeVXG4EkNvg4iyAeYzRz45yiiadNh_OYZ9MG9moS4acJm_OFA/viewform"
    },
    image: {
        src: process.env.image_src || "/avl.jpg",
        attr: {
            name: process.env.image_attr_name || "mogmismo",
            href: process.env.image_attr_link || "https://www.flickr.com/photos/mogmismo/",
        }
    },
    api: {
        dev: {
            url: process.env.api_dev_url || "https://65y0v85nve.execute-api.us-east-1.amazonaws.com/qa",
        },
        prod: {
            url: process.env.api_prod_url || "https://yqzgbw1s1g.execute-api.us-east-1.amazonaws.com/dev"
        }
    }
};