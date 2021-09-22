import "./header.css";
import { connect } from 'react-redux';

const Header = (props) => {
    const {
        userInfo
    } = props;

    return (
        <div className="header">
            <span className="logo"></span>
            <div className="user">{`${userInfo.name} (${userInfo.rol})`}</div>
            <div className="menu">
                <div className="menu-item">
                    <span className="icon"></span>
                    <span className="title">Inicio</span>
                </div>
                <div className="menu-item">
                    <span className="icon"></span>
                    <span className="title">Gestion</span>
                </div>
            </div>
        </div>
    )
}

export default connect(
    store => ({
        userInfo: store.login.userInfo,
    }),
    null
)(Header);