interface CaminteBase{

}

// @deprecated
declare function caminte(): CaminteBase;


declare namespace caminte {   
    type CallbackResult = (err: any, result: any) => void;
    
    interface Hookable {
        afterInitialize: Function;
        beforeValidation: Function;
        afterValidation: Function;
        beforeSave: Function;
        afterSave: Function;
        beforeCreate: Function;
        afterCreate: Function;
        beforeUpdate: Function;
        afterUpdate: Function;
        beforeDestroy: Function;
        afterDestroy: Function;
    }

    interface Validatable{
        /**
         * Validate presence. This validation fails when validated field is blank.
         *
         * Default error message 'can't be blank'
         *
         * @example presence of title
         * ```
         * Post.validatesPresenceOf('title');
         * ```
         * @example with custom message
         * ```
         * Post.validatesPresenceOf('title', {message: 'Can not be blank'});
         * ```
         *
         * @sync
         *
         * @nocode
         * @see helper/validatePresence
         */
        validatesPresenceOf(field:string, obj?: any):void;
        /**
         * Validate length. Three kinds of validations: min, max, is.
         *
         * Default error messages:
         *
         * - min: too short
         * - max: too long
         * - is:  length is wrong
         *
         * @example length validations
         * ```
         * User.validatesLengthOf('password', {min: 7});
         * User.validatesLengthOf('email', {max: 100});
         * User.validatesLengthOf('state', {is: 2});
         * User.validatesLengthOf('nick', {min: 3, max: 15});
         * ```
         * @example length validations with custom error messages
         * ```
         * User.validatesLengthOf('password', {min: 7, message: {min: 'too weak'}});
         * User.validatesLengthOf('state', {is: 2, message: {is: 'is not valid state name'}});
         * ```
         *
         * @sync
         * @nocode
         * @see helper/validateLength
         */        
        validatesLengthOf(field:string, obj?: any):void;
        /**
         * Validate numericality.
         *
         * @example
         * ```
         * User.validatesNumericalityOf('age', { message: { number: '...' }});
         * User.validatesNumericalityOf('age', {int: true, message: { int: '...' }});
         * ```
         *
         * Default error messages:
         *
         * - number: is not a number
         * - int: is not an integer
         *
         * @sync
         * @nocode
         * @see helper/validateNumericality
         */        
        validatesNumericalityOf(field:string, obj?: any):void;
    }

    class AbstractClass implements Hookable, Validatable{
        toJson():any;
        find(params?: any, callback?: CallbackResult):Query;
        exec(params?: any, callback?: CallbackResult):Query;
        all(params?: any, callback?: CallbackResult):Query;
        run(params?: any, callback?: CallbackResult):Query;
        /**
         * Find object by id
         *
         * @param {id} id - primary key value
         * @param {Function} callback - callback called with (err, instance)
         */
        findById(id: number, callback: CallbackResult):Query;
        /**
         * Find one record, same as `all`, limited by 1 and return object, not collection
         *
         * @param {Object} params - search conditions: {where: {test: 'me'}}
         * @param {Function} callback - callback called with (err, instance)
         */
        findOne<T>(params?: any, callback?: CallbackResult):T;

        
        /**
         * Declare hasMany relation
         *
         * @param {Class} anotherClass - class to has many
         * @param {Object} params - configuration {as:, foreignKey:}
         * @example `User.hasMany(Post, {as: 'posts', foreignKey: 'authorId'});`
         */
        hasMany(anotherClass: AbstractClass, params: any):void;

        /**
         * Create new instance of Model class, saved in database
         *
         * @param data [optional]
         * @param {Function} callback - callback called with (err, obj)
         * callback called with arguments:
         *
         *   - err (null or Error)
         *   - instance (null or Model)
         */
        create(data?: any, callback?:CallbackResult):void;

        save(options?: any, callback?:CallbackResult):void;
        update(data?: any, callback?:CallbackResult):void;
        updateOrCreate(query?: any, data?: any, callback?:CallbackResult):void;
        afterInitialize: Function;
        beforeValidation: Function;
        afterValidation: Function;
        beforeSave: Function;
        afterSave: Function;
        beforeCreate: Function;
        afterCreate: Function;
        beforeUpdate: Function;
        afterUpdate: Function;
        beforeDestroy: Function;
        afterDestroy: Function;    

        /**
         * Validate presence. This validation fails when validated field is blank.
         *
         * Default error message 'can't be blank'
         *
         * @example presence of title
         * ```
         * Post.validatesPresenceOf('title');
         * ```
         * @example with custom message
         * ```
         * Post.validatesPresenceOf('title', {message: 'Can not be blank'});
         * ```
         *
         * @sync
         *
         * @nocode
         * @see helper/validatePresence
         */
        validatesPresenceOf(field:string, obj?: any):void;
        /**
         * Validate length. Three kinds of validations: min, max, is.
         *
         * Default error messages:
         *
         * - min: too short
         * - max: too long
         * - is:  length is wrong
         *
         * @example length validations
         * ```
         * User.validatesLengthOf('password', {min: 7});
         * User.validatesLengthOf('email', {max: 100});
         * User.validatesLengthOf('state', {is: 2});
         * User.validatesLengthOf('nick', {min: 3, max: 15});
         * ```
         * @example length validations with custom error messages
         * ```
         * User.validatesLengthOf('password', {min: 7, message: {min: 'too weak'}});
         * User.validatesLengthOf('state', {is: 2, message: {is: 'is not valid state name'}});
         * ```
         *
         * @sync
         * @nocode
         * @see helper/validateLength
         */        
        validatesLengthOf(field:string, obj?: any):void;
        /**
         * Validate numericality.
         *
         * @example
         * ```
         * User.validatesNumericalityOf('age', { message: { number: '...' }});
         * User.validatesNumericalityOf('age', {int: true, message: { int: '...' }});
         * ```
         *
         * Default error messages:
         *
         * - number: is not a number
         * - int: is not an integer
         *
         * @sync
         * @nocode
         * @see helper/validateNumericality
         */        
        validatesNumericalityOf(field:string, obj?: any):void;
        /**
         * Validate inclusion in set
         *
         * @example
         * ```
         * User.validatesInclusionOf('gender', {in: ['male', 'female']});
         * User.validatesInclusionOf('role', {
         *     in: ['admin', 'moderator', 'user'], message: 'is not allowed'
         * });
         * ```
         *
         * Default error message: is not included in the list
         *
         * @sync
         * @nocode
         * @see helper/validateInclusion
         */
        validatesInclusionOf(field:string, obj?: any):void;
        /**
         * Validate exclusion
         *
         * @example `Company.validatesExclusionOf('domain', {in: ['www', 'admin']});`
         *
         * Default error message: is reserved
         *
         * @nocode
         * @see helper/validateExclusion
         */
        validatesExclusionOf(field:string, obj?: any):void;
        /**
         * Validate format
         *
         * Default error message: is invalid
         *
         * @nocode
         * @see helper/validateFormat
         */
        validateFormat(field:string, obj?: any):void;
        /**
         * Validate using custom validator
         *
         * Default error message: is invalid
         *
         * Example:
         *
         *     User.validate('name', customValidator, {message: 'Bad name'});
         *     function customValidator(err) {
         *         if (this.name === 'bad') err();
         *     });
         *     var user = new User({name: 'Peter'});
         *     user.isValid(); // true
         *     user.name = 'bad';
         *     user.isValid(); // false
         *
         * @nocode
         * @see helper/validateCustom
         */
        validateCustom(field:string, validador: Function, obj?: any):void;
        
        /**
         * Validate using custom async validator
         *
         * Default error message: is invalid
         *
         * Example:
         *
         *     User.validateAsync('name', customValidator, {message: 'Bad name'});
         *     function customValidator(err, done) {
         *         process.nextTick(function () {
         *             if (this.name === 'bad') err();
         *             done();
         *         });
         *     });
         *     var user = new User({name: 'Peter'});
         *     user.isValid(); // false (because async validation setup)
         *     user.isValid(function (isValid) {
         *         isValid; // true
         *     })
         *     user.name = 'bad';
         *     user.isValid(); // false
         *     user.isValid(function (isValid) {
         *         isValid; // false
         *     })
         *
         * @async
         * @nocode
         * @see helper/validateCustom
         */
        validateAsync(field:string, validador: Function, obj?: any):Function;
        /**
         * Validate uniqueness
         *
         * Default error message: is not unique
         *
         * @async
         * @nocode
         * @see helper/validateUniqueness
         */
        validateUniqueness(field:string, obj?: any):Function;
    }

    class Query {
        run(params?: any, callback?: CallbackResult) : void;
        all(params?: any, callback?: CallbackResult) : void;
        exec(params?: any, callback?: CallbackResult) : void;
        find(params?: any, callback?: CallbackResult) : void;
        findOne(params?: any, callback?: CallbackResult) : void;
        skip(key?: any, value?: any) : Query;
        limit(key?: any, value?: any) : Query;
        order(key?: any, value?: any) : Query;
        sort(key?: any, value?: any) : Query;
        group(key?: any, value?: any) : Query;
        where(key?: any, value?: any) : Query;
        gt(key?: any, value?: any) : Query;
        asc(value: any) : Query;
        desc(value: any) : Query;
        or(value: any) : Query;
        gte(key?: any, value?: any) : Query;
        lt(key?: any, value?: any) : Query;
        lte(key?: any, value?: any) : Query;
        in(key?: any, value?: any) : Query;
        inq(key?: any, value?: any) : Query;
        ne(key?: any, value?: any) : Query;
        neq(key?: any, value?: any) : Query;
        nin(key?: any, value?: any) : Query;
        regex(key?: any, value?: any) : Query;
        like(key?: any, value?: any) : Query;
        nlike(key?: any, value?: any) : Query;
        between(key?: any, value?: any) : Query;
        slice(values: any):Query;
        remove(params?: any, callback?: CallbackResult) : void;
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
        define<T>(name: string, structure: any, primary?:any):T;
    }
}

export = caminte;