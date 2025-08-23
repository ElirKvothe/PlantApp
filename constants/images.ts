// Plant Assets - Professional image constants approach
export const images = {
  plant: {
    background: require('../assets/plantassets/Background.png'),
    backgroundPaywall: require('../assets/plantassets/backgroundPaywall.png'),
    homeBackground: require('../assets/plantassets/HomeBackground.png'),
    artwork: require('../assets/plantassets/Artwork.png'),
    content: require('../assets/plantassets/Content.png'),
    frame13: require('../assets/plantassets/Frame13.png'),
    flatiPhone: require('../assets/plantassets/FlatiPhone.png'),
    leafs: require('../assets/plantassets/Leafs.png'),
    identify: require('../assets/plantassets/identify.png'),
    careGuides: require('../assets/plantassets/careguides.png'),
  },
} as const;

export type ImageKeys = typeof images;