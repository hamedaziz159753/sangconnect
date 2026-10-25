
export function validate(schema, source) {
    return (req, res, next) => {
        const result = schema.safeParse(req[source]);

        if (!result.success) {
            return res.status(400).json({
                message: "Données invalides",
                errors: result.error.issues
            });
        }

        if (source === "query") {
            res.locals.validatedQuery = result.data;
        } else {
            req.validatedData ??= {};
            req.validatedData[source] = result.data;
        }

        next();
    };
}

