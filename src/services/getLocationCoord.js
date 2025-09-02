
export const getLocationCoord=async()=>{
    if(!navigator.geolocation){
        throw new Error("GeoLocation not supported");
    }
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                resolve({
                    lat:position.coords.latitude,
                    lon:position.coords.longitude,
                })
            },
            (error)=>{
                reject(new Error(error.msg))
            }
        );
    });
};

