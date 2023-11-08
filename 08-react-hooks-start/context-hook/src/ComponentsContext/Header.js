import UserInfo from './UserInfo';

export default function Header({ username }) {
    return (
        <header>
            <UserInfo username={username} />
        </header>
    )
}