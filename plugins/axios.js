export default function ({$axios, store}) {
    $axios.onError(error => {
        if (error.response.status === 422) {
            store.dispatch('validation/setErrors',error.response.data.errors);
        }
        return Promise.reject(error);
        // return Promise.resolve(false); // with this if i pass nothing for login it will login 
    });

    $axios.onRequest(() => {
        store.dispatch('validation/setErrors');
    });
}