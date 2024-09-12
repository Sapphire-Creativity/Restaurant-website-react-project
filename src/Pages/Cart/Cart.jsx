import React from "react";
import SignImage from "../../Pages/Account/signin.jpg";

import OtherHeader from "../../Components/OtherHeader/OtherHeader";
const Cart = () => {
	return (
		<>
			<section>
				<OtherHeader backgroundImage={SignImage} subTitle={"Cart"} />
			</section>
		</>
	);
};

export default Cart;
