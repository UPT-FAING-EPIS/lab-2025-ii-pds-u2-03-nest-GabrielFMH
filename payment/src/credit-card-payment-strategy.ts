import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * @class CreditCardPaymentStrategy
 * @description Implements the payment strategy for credit card transactions.
 * @implements {IPaymentStrategy}
 */
export class CreditCardPaymentStrategy implements IPaymentStrategy {
    /**
     * @method Pay
     * @description Processes the payment using a credit card.
     * @param {number} amount - The amount to be paid.
     * @returns {boolean} Always returns true for this implementation.
     */
    public Pay(amount: number): boolean
    {
        console.info("Customer pays Rs " + amount + " using Credit Card");
        return true;
    }
}