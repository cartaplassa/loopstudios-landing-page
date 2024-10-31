export default function setBackground(name) {
    const mobileUrl = `url('${import.meta.env.BASE_URL}assets/images/mobile/${name}.jpg')`;
    const desktopUrl = `url('${import.meta.env.BASE_URL}assets/images/desktop/${name}.jpg')`
    return {
        '--mobile-bg': mobileUrl,
        '--desktop-bg': desktopUrl
    };
}