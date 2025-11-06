import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
        paddingTop: 32,
        paddingHorizontal: 16,
    },
    searchGroup: {
        marginBottom: 16,
    },
    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 8,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    searchControlGroup: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    searchFormText: {
        fontSize: 16,
        color: "#333",
        marginBottom: 4,
    },
    searchControl: {
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "#333",
    },
    searchButton: {
        backgroundColor: "#007AFF",
        borderRadius: 8,
        padding: 8,
        marginLeft: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    filterContainer: {
        width: 72,
        height: 56,
        backgroundColor: "#f8f8f8",
        borderRadius: 12,
        marginRight: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        shadowColor: "#000",
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1,
    },
    listingContainer: {
        flex: 1,
        marginTop: 16,
    },
    paginationContainer: {
        alignItems: "center",
        marginVertical: 16,
    },
    showMoreButton: {
        backgroundColor: "#007AFF",
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    showMoreButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
