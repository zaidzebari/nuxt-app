export default function ({$axios, store}) {
    $axios.onError(error => {
        if (error.response.status === 422) {
            store.dispatch('validation/setErrors',error.response.data.errors);
        }
        return Promise.reject(error);
        // return Promise.resolve(false);
    });

    $axios.onRequest(() => {
        store.dispatch('validation/setErrors');
    });
}