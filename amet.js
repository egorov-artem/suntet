const NONPOSITION_CHANNEL_INDEX = {
    // Example properties
    'color': true,
    'shape': true,
    // other non-position channels...
};

function isNonPositionChannel(channel) {
    return !!NONPOSITION_CHANNEL_INDEX[channel];
}

// Example usage:
console.log(isNonPositionChannel('color'));  // Output: true
console.log(isNonPositionChannel('size'));   // Output: false
