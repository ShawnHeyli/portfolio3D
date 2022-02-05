import './styles/Contact.scss';

export default function Contact() {
	return (
		<section className='contact'>
			<a href=''>
				<img src='/img/linkedin.png' alt='LinkedIn' />
				<p>Find me on LinkedIn</p>
			</a>
			<a href=''>
				<img src='/img/phone.png' alt='Phone' />
				<p>Call me</p>
			</a>
			<a href=''>
				<img src='/img/twitter.png' alt='Twitter' />
				<p>Follow me on Twitter</p>
			</a>
			<a href=''>
				<img src='/img/email.png' alt='Email' />
				<p>Send me an email</p>
			</a>
		</section>
	);
}
