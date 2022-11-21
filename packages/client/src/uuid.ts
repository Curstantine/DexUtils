export const UUID_REGEX = new RegExp(
	/^[\d\w]{8}-[\d\w]{4}-4[\d\w]{3}-[89AB][\d\w]{3}-[\d\w]{12}$/i
);

export const validateUUID = (uuid: string): boolean => {
	const matched = uuid.match(UUID_REGEX);
	return matched !== null;
};
