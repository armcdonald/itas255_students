import Header from './Header';

export default function Layout( {children, username}) {
    return ( 
        <div>
            <Header username={username} />
            <main>
                {children}
            </main>
        </div>
    )
}