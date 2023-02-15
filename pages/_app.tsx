import CustomHeader from '../components/antDesing/CustomHeader';
import CustomLayout from '../components/antDesing/CustomLayout';
import NavBar from '../components/home/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<CustomLayout style={{ backgroundColor: '#0a0a0a' }}>
			<CustomHeader style={{ backgroundColor: 'black' }}>
				<NavBar />
			</CustomHeader>
			<Component {...pageProps} />
		</CustomLayout>
	);
}

export default MyApp;