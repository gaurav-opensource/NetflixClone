const Footer = () => {
	return (
	  <footer className="py-8 bg-black text-gray-400 border-t border-gray-800">
		<div className="container mx-auto px-4">
		  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
			<div className="flex flex-col space-y-2">
			  <a href="#" className="hover:underline">Audio and Subtitles</a>
			  <a href="#" className="hover:underline">Media Center</a>
			  <a href="#" className="hover:underline">Privacy</a>
			  <a href="#" className="hover:underline">Contact Us</a>
			</div>
			<div className="flex flex-col space-y-2">
			  <a href="#" className="hover:underline">Help Center</a>
			  <a href="#" className="hover:underline">Jobs</a>
			  <a href="#" className="hover:underline">Cookie Preferences</a>
			  <a href="#" className="hover:underline">Legal Notices</a>
			</div>
			<div className="flex flex-col space-y-2">
			  <a href="#" className="hover:underline">Gift Cards</a>
			  <a href="#" className="hover:underline">Terms of Use</a>
			  <a href="#" className="hover:underline">Corporate Information</a>
			</div>
			<div className="flex flex-col space-y-2">
			  <a href="#" className="hover:underline">Account</a>
			  <a href="#" className="hover:underline">Redeem Gift Cards</a>
			  <a href="#" className="hover:underline">Speed Test</a>
			</div>
		  </div>
		  <div className="text-center mt-8">
			<button className="text-white border border-gray-500 px-4 py-2 rounded hover:bg-gray-700">
			  Service Code
			</button>
		  </div>
		  <p className="text-center mt-4 text-xs">
			© 2024 Netflix, Inc.
		  </p>
		</div>
	  </footer>
	);
  };
  
  export default Footer;
  