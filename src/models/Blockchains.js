
export const Blockchains = {
    FIBOS:'fibos',
    ETH:'eth',
    EOS:'eos',
    ENU:'enu'
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => (key !== 'ENU' && {key, value:Blockchains[key]})).filter(Boolean);
