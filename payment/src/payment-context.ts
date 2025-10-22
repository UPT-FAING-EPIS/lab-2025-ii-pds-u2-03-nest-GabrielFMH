import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * @class PaymentContext
 * @description Manages the payment strategy and delegates payment processing to the selected strategy.
 */
export class PaymentContext {
    /**
     * @property PaymentStrategy
     * @description The current payment strategy instance.
     * @private
     */
    private PaymentStrategy: IPaymentStrategy;

    /**
     * @method SetPaymentStrategy
     * @description Sets the payment strategy to be used for processing payments.
     * @param {IPaymentStrategy} strategy - The payment strategy to set.
     */
    public SetPaymentStrategy(strategy: IPaymentStrategy): void
    {
        this.PaymentStrategy = strategy;
    }

    /**
     * @method Pay
     * @description Processes the payment using the currently set strategy.
     * @param {number} amount - The amount to be paid.
     * @returns {boolean} The result of the payment processing from the strategy.
     */
    public Pay(amount: number): boolean
    {
        return this.PaymentStrategy.Pay(amount);
    }
}