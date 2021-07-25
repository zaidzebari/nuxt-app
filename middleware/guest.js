export default function ({store, redirect}) {
    if (store.getters['authenticated']) {
        console.log('true');
        return redirect('/profile')
    }else {
        console.log(false);
    }
}