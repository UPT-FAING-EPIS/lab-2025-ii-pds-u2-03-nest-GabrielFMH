import { CashPaymentStrategy } from "./cash-payment-strategy";
import { CreditCardPaymentStrategy } from "./credit-card-payment-strategy";
import { DebitCardPaymentStrategy } from "./debit-card-payment-strategy";
import { PaymentContext } from "./payment-context";

/**
 * @class PaymentService
 * @description Provides services for processing payments using different strategies.
 */
export class PaymentService {
    /**
     * @method ProcessPayment
     * @description Processes the payment based on the selected payment type.
     * @param {number} SelectedPaymentType - The type of payment (from PaymentType enum).
     * @param {number} Amount - The amount to be paid.
     * @returns {boolean} True if the payment is processed successfully.
     * @throws {Error} If an invalid payment type is selected.
     */
    public ProcessPayment(SelectedPaymentType: number, Amount: number): boolean
    {
        //Create an Instance of the PaymentContext class
        const context = new PaymentContext();
        if (SelectedPaymentType == PaymentType.CreditCard)
        {
            context.SetPaymentStrategy(new CreditCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.DebitCard)
        {
            context.SetPaymentStrategy(new DebitCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.Cash)
        {
            context.SetPaymentStrategy(new CashPaymentStrategy());
        }
        else
        {
            throw new Error("You Select an Invalid Payment Option");
        }
        //Finally, call the Pay Method
        return context.Pay(Amount);;
    }
}

/**
 * @enum PaymentType
 * @description Enumerates the available payment types.
 */
export enum PaymentType
{
    /**
     * @description Credit card payment type.
     */
    CreditCard = 1,  // 1 for CreditCard
    /**
     * @description Debit card payment type.
     */
    DebitCard = 2,   // 2 for DebitCard
    /**
     * @description Cash payment type.
     */
    Cash = 3, // 3 for Cash
}