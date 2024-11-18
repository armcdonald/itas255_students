import UserInfo from './UserInfo';

export default function Header() {
    return (
        <header>
            <h1>{projectName}</h1>
            <UserInfo />
        </header>
    )
}