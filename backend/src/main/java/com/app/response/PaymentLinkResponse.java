package com.app.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PaymentLinkResponse {

	private String payment_link_url;
	private String payment_link_id;

	public String getPayment_link_url() {
		return payment_link_url;
	}

	public void setPayment_link_url(String payment_link_url) {
		this.payment_link_url = payment_link_url;
	}

	public String getPayment_link_id() {
		return payment_link_id;
	}

	public void setPayment_link_id(String payment_link_id) {
		this.payment_link_id = payment_link_id;
	}

}
