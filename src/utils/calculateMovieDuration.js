const calculateMovieDuration = (duration) => {

    const hour = Math.floor(duration / 60);
    const minute = Math.floor(duration % 60);

    return { hour, minute }
}
export default calculateMovieDuration;