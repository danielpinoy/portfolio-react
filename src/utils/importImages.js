const importAll = (r, subfolder = "") => {
    let images = {};
    r.keys().map((item) => {
        const key = subfolder ? `${subfolder}/${item.replace("./", "")}` : item.replace("./", "");
        images[key] = r(item);
    });
    return images;
};

const images = {
    ...importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/)),
    ...importAll(require.context("../images/website-sc", false, /\.(png|jpe?g|svg)$/)),
    ...importAll(require.context("../images/casestudy", false, /\.(png|jpe?g|svg)$/)),
};

export default images;
