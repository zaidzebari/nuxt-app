export default function ({store, redirect}) {
    if (store.getters['authenticated']) {
        console.log('true');
        return redirect('/dashboard')
    }else {
        // return redirect('/login')
        console.log(false);
    }
}