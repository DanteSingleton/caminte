interface CaminteBase{

}

// @deprecated
declare function caminte(): CaminteBase;

declare namespace caminte {   
    type CallbackResult = (err: any, result: any) => void;
    
    class AbstractClass{
        find(params?: any, callback?: CallbackResult):Query;
    }

    class Query {
        run(params?: any, callback?: CallbackResult) : void;
        all(params?: any, callback?: CallbackResult) : void;
        exec(params?: any, callback?: CallbackResult) : void;
        find(params?: any, callback?: CallbackResult) : void;
        findOne(params?: any, callback?: CallbackResult) : void;
        skip(key: any, value: any) : Query;
    }

    class Config{
        driver: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        debug?: Boolean;
        pool?: Boolean;
    }
    
    class Schema{
        String: Function;
        Integer: Function;
        Date: Function;
        Text: Function;
        Float: Function;

        constructor(driver: string, config: Config);
        /**
         * Define class
         *
         * @param {String} className
         * @param {Object} properties - hash of class properties in format
         *   `{property: Type, property2: Type2, ...}`
         *   or
         *   `{property: {type: Type}, property2: {type: Type2}, ...}`
         * @param {Object} settings - other configuration of class
         * @return newly created class
         *
         * @example simple case
         * ```
         * var User = schema.define('User', {
         *     email: String,
         *     password: String,
         *     birthDate: Date,
         *     activated: Boolean
         * });
         * ```
         * @example more advanced case
         * ```
         * var User = schema.define('User', {
         *     email: { type: String, limit: 150, index: true },
         *     password: { type: String, limit: 50 },
         *     birthDate: Date,
         *     registrationDate: {type: Date, default: function () { return new Date }},
         *     activated: { type: Boolean, default: false }
         * });
         * ```
         */
        define<T>(name: string, structure: any):T;
    }
}

export = caminte;